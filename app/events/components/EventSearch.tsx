import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { LocationInput } from "./LocationInput"
import { useEventSearch } from "@/app/hooks/useEventSearch"
import { fetchDataFromPredictlHQAPI } from "@/app/actions"

interface EventSearchProps {
    onSearch: (searchTerm: string, location: string) => Promise<void>
    // setEventDate type should be type of useState
    setEventData: React.Dispatch<React.SetStateAction<any>>
}

const EventSearch: React.FC<EventSearchProps> = ({ onSearch, setEventData }) => {
    const {
        searchTerm,
        setSearchTerm,
        location,
        handleLocationChange,
        suggestions,
        isLoading,
        error
    } = useEventSearch(onSearch)
    const handleSearch = async () => {
        // make api call to predictlhq
        const result = await fetchDataFromPredictlHQAPI({ searchTerm, location, limit: 10, offset: 0 })
        setEventData(result)
    }

    return (
        <div className="space-y-4">
            <h1 className="text-4xl font-bold">Find Events</h1>
            <div className="flex flex-col sm:flex-row gap-4">
                <SearchInput value={searchTerm} onChange={setSearchTerm} />
                <LocationInput
                    value={location}
                    onChange={handleLocationChange}
                    suggestions={suggestions}
                    isLoading={isLoading}
                    error={error}
                />
                <SearchButton onClick={handleSearch} />
            </div>
        </div>
    )
}

const SearchInput: React.FC<{ value: string; onChange: (value: string) => void }> = ({ value, onChange }) => (
    <div className="flex-1">
        <Input
            type="text"
            placeholder="Search events"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="bg-gray-800 border-gray-700 text-base text-white placeholder-gray-400"
        />
    </div>
)

const SearchButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <Button onClick={onClick} className="bg-purple-600 hover:bg-purple-700 text-base">
        <Search className="mr-2 h-4 w-4" /> Search
    </Button>
)

export default EventSearch
