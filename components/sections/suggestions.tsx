import { useGlobalContext } from "@/context"
import MapComponent from "../ui/routeVisualizer"
import Hotels from "./hotels"
import FindRestaurant from "./restaurant"

export const Suggestions = () => {
    const { dest } = useGlobalContext()
    if (!dest) return <div className="container text-center text-5xl font-bold  mt-44 text-gray-300">Find your destined tour</div>

    return (
        <div className="w-full space-y-5 mt-44">
            <MapComponent />
            <Hotels />
            <FindRestaurant />
        </div>
    )
}