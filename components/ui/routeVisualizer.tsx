'use client'; // Ensure this runs on the client-side
import { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine'; // Import the Leaflet Routing Machine
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'; // Import CSS for routing machine

// Fix the marker icons
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface LatLng {
    lat: number;
    lng: number;
}

const MapComponent = () => {
    // Define the start and end points (latitude, longitude)
    const startPoint: [number, number] = [22.3573746, 91.7366361]; // Chittagong coordinates
    const endPoint: [number, number] = [23.7808186, 90.3372881]; // Dhaka coordinates

    // Initialize the routing on map load
    useEffect(() => {
        const map = L.map('map', {
            center: startPoint, // Initial center point
            zoom: 13, // Initial zoom level
            scrollWheelZoom: false, // Optional: Disable scroll zoom if needed
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Add Leaflet Routing Machine
        const routingControl = L.Routing.control({
            waypoints: [L.latLng(startPoint), L.latLng(endPoint)], // Set start and end points
            routeWhileDragging: false, // Disable route dragging
            fitSelectedRoutes: true, // Ensure the route fits within the map bounds
        }).addTo(map);

        // After the route is found, fit the route to the map's parent container
        routingControl.on('routesfound', function (e) {
            const route = e.routes[0];
            const bounds = L.latLngBounds(
                route.coordinates.map((coord: LatLng) => L.latLng(coord.lat, coord.lng)) // Explicitly define the coord type
            );
            map.fitBounds(bounds, { padding: [50, 50] }); // Add padding to ensure it fits nicely within the parent
        });

        return () => {
            map.remove(); // Clean up the map instance on unmount
        };
    }, [startPoint, endPoint]);

    return (
        <div className='container w-full mx-auto h-[40vh]'>
            <div className='rounded-2xl' id="map" style={{ height: '100%', width: '100%' }}></div> {/* Fullscreen map container */}
        </div>
    );
};

export default MapComponent;