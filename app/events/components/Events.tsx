'use client'
import EventSearch from "./EventSearch"
import EventList from "./EventList"
import useEventData from "@/app/hooks/useEventData"

const Events: React.FC = () => {
    const { eventData, isLoading, error, fetchEvents } = useEventData()

    return (
        <div className="text-white min-h-screen p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <EventSearch onSearch={fetchEvents} />
                <EventList events={eventData?.results} isLoading={isLoading} />
            </div>
        </div>
    )
}

export default Events
