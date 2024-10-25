import { CheckCircle } from "lucide-react"

const Confirm = () => {
    return (
        <div className="container gap-4 h-screen w-full flex items-center justify-center">
            <CheckCircle size={70} className="text-green-400" />
            <p className="text-5xl font-bold">Your booking has been confirmed</p>
        </div>
    )
}
export default Confirm