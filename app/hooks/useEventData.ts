import { useState, useEffect } from 'react'
import { fetchDataFromPredictlHQAPI } from "@/app/actions"

/**
 * A custom React hook to manage event data.
 *
 * @return {{ eventData: any, isLoading: boolean, error: string | null, fetchEvents: Function }} 
 *         An object containing the event data, loading state, error message, and a function to fetch events.
 */
const useEventData = () => {
    const [eventData, setEventData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const fetchEvents = async (searchTerm: string, location: string, limit: number = 10, offset: number = 0) => {
        setIsLoading(true)
        setError(null)
        
        try {
            const result = await fetchDataFromPredictlHQAPI({ searchTerm, location, limit, offset })
            console.log('event result!!!!', [...eventData, ...result]);
            setEventData([...eventData, ...result])
            return result
        } catch (err) {
            setError('Failed to fetch data')
            return { results: [], count: 0 }
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        console.log('eventData in hook', eventData);
    }, [eventData])

    return { eventData, isLoading, error, fetchEvents }
}

export default useEventData
