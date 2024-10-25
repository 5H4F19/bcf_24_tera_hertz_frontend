import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { axiosInstance, setAuthToken } from "@/lib/utils"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Search } from "lucide-react"

export default function Gallery({ tourId }: { tourId: string }) {
    const [images, setImages] = useState<any[]>([])
    const [ai_image, setAi_image] = useState<string | undefined>(undefined)
    const [prompt, setPromt] = useState<string>("")
    const token = localStorage.getItem('@token')
    setAuthToken(token!)

    useEffect(() => {
        const getImages = async () => {
            try {
                const res = await axiosInstance.post('/file/files', {
                    tourId
                })
                console.log("files", res.data.files)
                setImages(res.data.files)
            } catch (error) {
                console.log("error", error)
            }
        }
        getImages()
    }, [])

    const handleSubmit = async () => {
        console.log(prompt)
        try {
            const res = await axiosInstance.post('/ai/bestmatch', {
                promptText: prompt
            })
            console.log("ai_image", res)
            setAi_image(res?.data?.best_image_url)
        } catch (error) {
            console.log("error", error)
        }
    }
    return (
        <div className="container mx-auto bg-slate-100 mt-24 rounded-3xl">
            <div className="relative w-1/2 mx-auto rounded-3xl -translate-y-3 shadow-2xl">
                <Input value={prompt as any} onChange={e => setPromt(e.target.value)} placeholder="Input promt to search" className="h-12" />
                <Button onClick={handleSubmit} className="absolute h-12 top-0 right-0">
                    <Search className="text-gray-400" />
                </Button>
            </div>
            {ai_image && <div className="w-44 h-44">
                <p className="text-lg font-bolds">Best match</p>
                <Image
                    src={ai_image}
                    alt="Gallery Image 1"
                    width="300"
                    height="300"
                    className="object-cover w-full rounded-lg overflow-hidden"
                    style={{ aspectRatio: "300/300", objectFit: "contain" }}
                />
            </div>}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-6">
                {images.map(img => (
                    <Image
                        src={img?.url}
                        alt="Gallery Image 1"
                        width="300"
                        height="300"
                        className="object-cover w-full rounded-lg overflow-hidden"
                        style={{ aspectRatio: "300/300", objectFit: "cover" }}
                    />

                ))}
            </div>
        </div>
    )
}