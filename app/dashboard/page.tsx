'use client'

import { Card } from "@/components/ui/card"
import { axiosInstance, setAuthToken } from "@/lib/utils"
import axios from "axios"
import { Calendar, Hotel, Navigation, Soup } from "lucide-react"
import { useEffect, useState } from "react"
import { format, parseISO } from 'date-fns';
import Link from "next/link"
import { useRedirectIsAuthOrNot } from "@/hooks/useAuthentication"

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const Dashboard = () => {

    const [tours, setTours] = useState<any[]>([])
    useEffect(() => {
        const getTours = async () => {
            try {
                const token = localStorage.getItem('@token')
                setAuthToken(token!)

                const res = await axiosInstance.get('/user/tour')
                setTours(res.data.data.tripHistory)
            } catch (error: any) {
                console.error('Error during signup:', error);
            }
        };
        getTours()
    }, [])
    return (
        <div className="container py-10 mt-10 mx-auto">
            <div className="space-y-3">
                {tours.map(item => (
                    <Link href={`/gallery/${item._id}`}>
                        <Card key={item.destination} className="flex items-center justify-around p-8 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <Navigation className='text-gray-400' />
                                <div className="">
                                    <p className="text-xs">Destination</p>
                                    <p className="text-lg">{item.destination}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className='text-gray-400' />
                                <div className="">
                                    <p className="text-xs">Date</p>
                                    <p className="text-lg">{format(parseISO(item.departureDate), "MMMM dd, yyyy")}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Hotel className='text-gray-400' />
                                <div className="">
                                    <p className="text-xs">Hotel</p>
                                    <p className="text-lg">-</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Soup className='text-gray-400' />
                                <div className="">
                                    <p className="text-xs">Restaurant</p>
                                    <p className="text-lg">-</p>
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div >
    )
}
export default Dashboard