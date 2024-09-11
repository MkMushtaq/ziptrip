import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import SuggestionsList from "./SuggestionList"

interface LocationInputProps {
    value: string
    onChange: (value: string) => void
    suggestions: string[]
    isLoading: boolean
    error: string | null
}

export const LocationInput: React.FC<LocationInputProps> = ({
    value,
    onChange,
    suggestions,
    isLoading,
    error
}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleSelectSuggestion = (suggestion: string) => {
        onChange(suggestion)
        setIsOpen(false)
    }

    return (
        <div className="flex-1 relative">
            <Input
                type="text"
                placeholder="Location"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setIsOpen(true)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
            {isLoading && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
                </div>
            )}
            {isOpen && suggestions.length > 0 && (
                <SuggestionsList suggestions={suggestions} onSelect={handleSelectSuggestion} />
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    )
}


