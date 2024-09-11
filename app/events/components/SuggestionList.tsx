const SuggestionsList: React.FC<{ suggestions: string[]; onSelect: (suggestion: string) => void }> = ({
    suggestions,
    onSelect
}) => (
    <ul className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-md shadow-lg">
        {suggestions.map((suggestion, index) => (
            <li
                key={index}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => onSelect(suggestion)}
            >
                {suggestion}
            </li>
        ))}
    </ul>
)

export default SuggestionsList;