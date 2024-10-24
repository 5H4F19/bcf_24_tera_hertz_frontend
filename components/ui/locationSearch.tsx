'use client';
import { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { Input } from './input';
import { MapPin, Navigation } from 'lucide-react';
import { useGlobalContext } from '@/context';

interface Location {
    display_name: string;
    lat: string;
    lon: string;
    place_id: string;
}

interface LocationSearchProps {
    onSelectLocation?: (location: Location) => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onSelectLocation }) => {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<Location[]>([]);
    const { setDest } = useGlobalContext();

    const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        if (e.target.value.length > 2) {
            try {
                const res = await axios.get<Location[]>(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(e.target.value)}`
                );
                setResults(res.data);
            } catch (error) {
                console.error("Error fetching location data:", error);
                setResults([]);
            }
        } else {
            setResults([]);
        }
    };

    const handleSelect = (location: Location) => {
        console.log("Selected location:", [Number(location.lat), Number(location.lon)]);
        setDest([Number(location.lat), Number(location.lon)]);
        setQuery(location.display_name);
        setResults([]);
    };

    return (
        <div className='relative w-full'>
            <div className='flex items-center gap-2'>
                <Navigation className='text-gray-400' />
                <Input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search for a location..."
                    className='bg-white h-14 text-lg border-none shadow-none'
                />
            </div>
            {results.length > 0 && (
                <ul className='absolute bg-white space-y-2 overflow-hidden py-1 border w-full rounded-lg mt-4 shadow-lg'>
                    {results.map((result) => (
                        <li className='flex p-2 hover:bg-gray-200 items-center gap-2 cursor-pointer' key={result.place_id} onClick={() => handleSelect(result)}>
                            <MapPin className="text-black" /> {result.display_name.substring(0, 25) + "..."}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LocationSearch;
