"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker() {
    const [date, setDate] = React.useState<Date>()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="w-full flex items-center gap-2">
                    <CalendarIcon className="text-gray-400" />
                    <Button
                        variant={"outline"}
                        className={cn(
                            "h-14 bg-white rounded-xl text-lg border-none w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >

                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
