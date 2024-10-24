import { useGlobalContext } from "@/context"
import MapComponent from "../ui/routeVisualizer"

export const Suggestions = () => {
    const { dest } = useGlobalContext()
    return (
        <div className="w-full">
            <MapComponent />
        </div>
    )
}