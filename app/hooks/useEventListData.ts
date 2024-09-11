import { useState, useEffect } from "react"

export const useEventListData = (initialEvents: any, initialTotalCount: number, loadMore: () => Promise<{ events: any, totalCount: number }>) => { 
    const [events, setEvents] = useState(initialEvents)
    const [totalCount, setTotalCount] = useState(initialTotalCount)

    useEffect(() => {
        setEvents(initialEvents)
        setTotalCount(initialTotalCount)
    }, [initialEvents, initialTotalCount])

    const fetchMoreData = async () => {
        const { events: newEvents, totalCount: newTotalCount } = await loadMore()
        setEvents((prevEvents: any) => [...prevEvents, ...newEvents])
        setTotalCount(newTotalCount)
    }

    return { events, totalCount, fetchMoreData }
    
}
