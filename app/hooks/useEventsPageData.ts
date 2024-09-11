// add the useEventData hook here

import { useState, useCallback } from "react"
import useEventData from "./useEventData"

/**
 * A custom React hook that manages event page data, including search term, location, 
 * loading state, error, and event data. It also provides methods to load more events 
 * and handle search.
 *
 * @return {object} An object containing the current search term, location, loading state, 
 * error, event data, load more events function, handle search function, and set event data function.
 */
const useEventsPageData = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [location, setLocation] = useState('')
    const [page, setPage] = useState(0)
    const [eventData, setEventData] = useState<any>([])
    const { isLoading, error, fetchEvents } = useEventData()

    const loadMoreEvents = useCallback(async () => {
        const newData = await fetchEvents(searchTerm, location, 10, (page + 1) * 10)
        setPage(prevPage => prevPage + 1)
        return {
            events: newData.results,
            totalCount: newData.count
        }
    }, [fetchEvents, searchTerm, location, page])

    const handleSearch = async (newSearchTerm: string, newLocation: string) => {
        setSearchTerm(newSearchTerm)
        setLocation(newLocation)
        setPage(0)
        const result = await fetchEvents(newSearchTerm, newLocation, 10, 0)
    }

    return {
        searchTerm,
        location,
        isLoading,
        error,
        eventData,
        loadMoreEvents,
        handleSearch,
        setEventData
    }
}

export default useEventsPageData


