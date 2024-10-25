from flask import Flask, request, jsonify
import requests
from PIL import Image
from io import BytesIO
from transformers import CLIPProcessor, CLIPModel
import subprocess

app = Flask(__name__)

# Load the pre-trained CLIP model and processor
model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

def download_image(url):
    """Download an image from a URL."""
    try:
        response = requests.get(url)
        response.raise_for_status()
        return Image.open(BytesIO(response.content))
    except requests.exceptions.RequestException as e:
        print(f"Error downloading image {url}: {e}")
        return None

def create_prompt(travel_info):
    """Create a prompt for generating a travel blog."""
    prompt = f"""
    Generate a travel blog for the following details:
    Start Location: {travel_info['startLocation']}
    Destination: {travel_info['endLocation']}
    Hotel: {travel_info['hotel']}
    Activities: {', '.join(travel_info['activities'])}
    Travel Date: {travel_info['travelDate']}
    Duration: {travel_info['duration']}
    Tour Time: {travel_info.get('tourTime', 'Not specified')}
    Highlights: {travel_info['highlights']}
    Additional Info: {travel_info.get('additionalInfo', 'None provided')}
    """
    return prompt.strip()

def run_llama(prompt):
    """Run the Llama3.2 model with the provided prompt."""
    command = ['ollama', 'run', 'llama3.2', prompt]
    result = subprocess.run(command, capture_output=True, text=True)
    return result.stdout.strip()

@app.route('/generate_blog', methods=['POST'])
def generate_blog():
    """Endpoint to generate a blog from travel info JSON."""
    travel_info = request.json  # Get JSON data from the request
    prompt = create_prompt(travel_info)
    blog_text = run_llama(prompt)
    return jsonify({'blog': blog_text})

def find_best_image_match(prompt, image_urls):
    """Find the best matching image for the given prompt."""
    images = []
    valid_image_urls = []

    for url in image_urls:
        image = download_image(url)
        if image:
            images.append(image)
            valid_image_urls.append(url)

    if not images:
        return None

    # Preprocess the images and prompt
    inputs = processor(text=[prompt], images=images, return_tensors="pt", padding=True)

    # Forward pass through the model to calculate similarity
    outputs = model(**inputs)

    # Extract the logits for image-text similarity
    logits_per_image = outputs.logits_per_image

    # Get the probabilities for each image
    probs = logits_per_image.softmax(dim=0)  # Convert logits to probabilities

    # Find the index of the image with the highest probability
    best_match_index = probs.argmax().item()

    # Return the best matching image URL
    return valid_image_urls[best_match_index]

@app.route('/find-best-match', methods=['POST'])
def find_best_match():
    """Endpoint to find the best matching image for a given prompt."""
    data = request.json
    prompt = data.get("prompt")
    image_urls = data.get("image_urls")

    if not prompt or not image_urls:
        return jsonify({"error": "Prompt or image URLs missing!"}), 400

    best_image = find_best_image_match(prompt, image_urls)

    if best_image:
        return jsonify({"best_image": best_image}), 200
    else:
        return jsonify({"error": "No match found."}), 404

@app.route('/welcome', methods=['GET'])
def welcome():
    """Welcome route for the API."""
    return jsonify({"message": "Welcome to the CLIP image matching API!"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)  # Change the port as needed
