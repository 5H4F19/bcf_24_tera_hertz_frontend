import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGlobalContext } from '@/context';
import { Building2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';


const FindHotels: React.FC = () => {
    const [hotels, setHotels] = useState<any[]>([]);
    const [error, setError] = useState<string>('');
    const { dest } = useGlobalContext()

    const getNearbyHotels = async (lat: number, lon: number) => {
        const apiKey = process.env.NEXT_PUBLIC_GEO_API // Replace with your GeoAPI key
        try {
            const response = await axios.get(`https://api.geoapify.com/v2/places?categories=accommodation.hotel&filter=circle:${lat + "," + lon},5000&bias=proximity:${lat + "," + lon}&limit=3&apiKey=${apiKey}`);
            console.log(response.data)
            return response.data?.features; // Return hotel results
        } catch (error: any) {
            setError(error?.message);
            throw error;
        }
    };

    const fetchHotels = async (dest: [number, number]) => {
        try {
            const nearbyHotels = await getNearbyHotels(dest?.[1], dest?.[0]);
            setHotels(nearbyHotels);
        } catch (error) {
            console.error(error);
        }
    };

    // Fetch hotels when the component mounts or when dest changes
    useEffect(() => {
        if (!dest) return
        fetchHotels(dest);
    }, [dest]);

    return (
        <div className='container mt-5 mx-auto'>
            {hotels.length > 0 && (
                <h1 className='text-xl font-bold mb-3'>Nearest Hotels</h1>
            )}
            {error && <p>Error: {error}</p>}
            <ul className='grid grid-cols-3 gap-3'>
                {hotels.map((hotel, index) => (
                    <Card key={hotel?.properties?.name} className='space-x-3 p-6 spacep-y-3 flex items-center'>
                        <Image className='w-16 h-auto' width={100} height={100} src="/skyscraper.png" alt='' />
                        <div>
                            <h2 className='text-xs font-medium'>Hotel name</h2>
                            <h2 className='text-2xl font-medium'>{hotel?.properties?.name}</h2>
                            <h2 className='text-xs font-medium mt-1'>Estimated Cost/Day</h2>
                            <h2 className='text-2xl font-medium'>10,131 tk</h2>
                        </div>
                    </Card>
                ))}
            </ul>
        </div>
    );
};

export default FindHotels;
