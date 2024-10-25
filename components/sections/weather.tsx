'use client'; // Ensure this runs on the client-side
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useGlobalContext } from '@/context';

const Weather = () => {
    const [data, setData] = useState<any>(null);  // To store the fetched data
    const [loading, setLoading] = useState<boolean>(true); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state
    const { date } = useGlobalContext()

    useEffect(() => {
        // Function to fetch data from the backend
        const fetchData = async () => {
            try {
                if (!date) return
                const response = await axios.post('http://localhost:8000/api/v1/weather/get', {
                    city: "Dhaka",
                    tripDates: [date]
                }); // Replace with your actual endpoint
                console.log(response.data)
                setData(response.data.alerts[0].alerts[0]);  // Store data in state
            } catch (err) {
                setError('Error fetching data');
                console.error('API Error:', err);
            } finally {
                setLoading(false);  // Turn off the loading state
            }
        };

        fetchData();  // Call the function to fetch data on component mount
    }, [date]);  // Empty dependency array ensures this runs only once

    if (loading) return <p>Loading...</p>;  // Show loading while the request is in progress
    if (error) return <p>{error}</p>;  // Display error message if there's an error

    return (
        <div className='container mt-5 mx-auto'>
            <h1 className='text-xl font-bold mb-3'>Weather alerts</h1>
            {error && <p>Error: {error}</p>}
            <ul className='grid grid-cols-3 gap-3'>
                <p className='text-2xl text-yellow-500'>{data}{date}</p>
            </ul>
        </div>
    );
};

export default Weather;
