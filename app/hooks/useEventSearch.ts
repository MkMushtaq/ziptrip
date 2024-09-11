import { useState, useCallback } from 'react'
import { useLocationSuggestions } from './useLocationSuggestions'

/**
 * Returns an object with searchTerm, setSearchTerm, location, handleLocationChange,
 * handleSearch, suggestions, isLoading, and error.
 *
 * @param {Function} onSearch - A function that takes in searchTerm and location as
 * parameters and performs a search.
 * @return {Object} An object with searchTerm, setSearchTerm, location,
 * handleLocationChange, handleSearch, suggestions, isLoading, and error.
 */
export function useEventSearch(onSearch: (searchTerm: string, location: string) => void) {
    const [searchTerm, setSearchTerm] = useState('')
    const [location, setLocation] = useState('')
    const { suggestions, isLoading, error, getSuggestions } = useLocationSuggestions()

    const handleSearch = () => {
        console.log('onsearch being triggered', );
        onSearch(searchTerm, location)
    }

    const handleLocationChange = useCallback((value: string) => {
        setLocation(value)
        getSuggestions(value)
    }, [getSuggestions])

    return {
        searchTerm,
        setSearchTerm,
        location,
        handleLocationChange,
        handleSearch,
        suggestions,
        isLoading,
        error
    }
}
