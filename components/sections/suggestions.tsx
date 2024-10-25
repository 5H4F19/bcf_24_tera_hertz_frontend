import { useGlobalContext } from "@/context"
import MapComponent from "../ui/routeVisualizer"
import Hotels from "./hotels"
import FindRestaurant from "./restaurant"
import Transports from "./transports"
import Durations from "./durations"
import { Estimations } from "./estimatons"
import { Button } from "../ui/button"
import Link from "next/link"

export const Suggestions = () => {
    const { dest } = useGlobalContext()
    if (!dest) return <div className="container mx-auto text-center text-5xl font-bold  mt-44 text-gray-300">
        Find your destined tour
    </div>

    return (
        <div className="mx-auto w-[90%] space-y-5 mt-44 py-5 rounded-3xl">
            <MapComponent />
            <Transports />
            <Durations />
            <Hotels />
            <FindRestaurant />
            <Estimations />
            <div className="w-full flex items-center justify-center">
                <Link href={'/confirm'}>
                    <Button className="px-5 py-2 text-lg shadow-lg">Proceed</Button>
                </Link>
            </div>
        </div>
    )
}