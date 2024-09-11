import { useState, useCallback } from 'react'
import debounce from 'lodash/debounce'
import { getLocationSuggestions } from '@/app/actions'

/**
 * A custom React hook that fetches location suggestions based on the provided query string.
 * It returns an object containing the suggestions, a loading state, an error message, and a function to fetch suggestions.
 *
 * @return {{suggestions: string[], isLoading: boolean, error: string | null, getSuggestions: (value: string) => void}} An object containing the location suggestions, loading state, error message, and a function to fetch suggestions.
 */
export function useLocationSuggestions() {
	const [suggestions, setSuggestions] = useState<string[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const fetchSuggestions = useCallback(
		debounce(async (value: string) => {
			if (value.length <= 2) {
				setSuggestions([])
				return
			}

			setIsLoading(true)
			try {
				const result = await getLocationSuggestions(value)
				setSuggestions(result)
				setError(null)
			} catch (err) {
				setError('Failed to fetch location suggestions. Please try again.')
				setSuggestions([])
			} finally {
				setIsLoading(false)
			}
		}, 300),
		[]
	)

	return { suggestions, isLoading, error, getSuggestions: fetchSuggestions }
}
