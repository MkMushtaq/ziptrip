import useEventData from "@/app/hooks/useEventData"
import { useState, useCallback } from "react"
import EventList from "./EventList"
import EventSearch from "./EventSearch"
import useEventsPageData from "@/app/hooks/useEventsPageData"

const Events: React.FC = () => {
    const {
        isLoading,
        eventData,
        loadMoreEvents,
        handleSearch,
        setEventData
    } = useEventsPageData();

    return (
        <div className="text-white min-h-screen p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <EventSearch onSearch={handleSearch} setEventData={setEventData} />
                <EventList
                    events={eventData?.results || []}
                    isLoading={isLoading}
                    loadMore={loadMoreEvents}
                    initialTotalCount={eventData?.count || 0}
                />
            </div>
        </div>
    )
}

export default Events;
