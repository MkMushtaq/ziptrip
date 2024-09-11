import FormattedDate from "@/components/DayFormatter"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Calendar, CarTaxiFront, ConciergeBell, MapPin } from "lucide-react"
import { Event } from "@/utils/types"
import { FractionalUsersIcon } from "./AttendanceIcon";
import { FoodModal } from "./FoodModal";

interface EventAccordionProps {
    events: Event[];
}

function getAttendanceFillPercentage(attendance: number): number {
    if (attendance > 10000) return 100;
    if (attendance > 5000) return 75;
    if (attendance > 1000) return 50;
    return 25;
}

export function EventAccordion({ events }: EventAccordionProps) {
    return (
        <Accordion type="single" collapsible className="w-full">
            {events.map((event) => (
                <AccordionItem key={event.id} value={event.id}>
                    <AccordionTrigger className="flex items-center justify-between">
                        <div className="flex items-center justify-between w-full">
                            <span className="text-left">{event.title}</span>
                            <FractionalUsersIcon
                                fillPercentage={getAttendanceFillPercentage(event.phq_attendance)}
                                size={20}
                                eventAttendance={event.phq_attendance}
                            />
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex items-center justify-between text-gray-400">
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <Calendar className="mr-2 h-4 w-4" />
                                    <span><FormattedDate isoString={event.date} /></span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="mr-2 h-4 w-4" />
                                    <span>{event.geo.address.formatted_address ?? 'Address to be found'}</span>
                                </div>
                            </div>
                            <div className="flex space-x-8 md:mr-8">
                                <FoodModal eventNumber={event.predicted_event_spend_industries.hospitality} />
                                <ConciergeBell />
                                <CarTaxiFront />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
