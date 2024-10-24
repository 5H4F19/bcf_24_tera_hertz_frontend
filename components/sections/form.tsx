import clsx from "clsx"
import { DatePicker } from "../ui/datepicker"
import LocationSearch from "../ui/locationSearch"
import { geist, geistMono } from "@/app/lib/font"
import { useGlobalContext } from "@/context"

const Form = () => {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 shadow-2xl flex items-center mt-44 gap-2 container w-1/2 backdrop-blur-xl bg-white/80 px-5 py-10 px-10 rounded-2xl">
            <LocationSearch />
            <DatePicker />

        </div>
    )
}

export default Form