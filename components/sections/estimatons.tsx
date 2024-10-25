import { Transportation, useGlobalContext } from "@/context"
import { Card } from "../ui/card"


export const Estimations = () => {
    const { optimalDistance, transportation } = useGlobalContext()
    return (
        <div className="container mx-auto">
            <h1 className='text-xl font-bold mb-3'>Estimated costs</h1>
            <Card className="p-4">
                <p className="text-lg">{
                    (transportation === Transportation.air ? 13 : transportation === Transportation.road ? 7 : 3) * (optimalDistance || 1) + 13000
                } BDT</p>
            </Card>
        </div>
    )
}