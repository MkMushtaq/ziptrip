'use server'

import { API_TOKEN, API_URL, DEFAULT_RADIUS, LA_LAT, LA_LNG } from '@/utils/consts';
import { geocode } from '@/utils/geocoding'
import { NominatimResult } from '@/utils/types';

/**
 * Fetches data from the Predictl HQ API.
 *
 * @param {object} [queryParams] - Optional query parameters to include in the API request.
 * @param {string} [queryParams.location] - Location to geocode and use in the API request.
 * @return {Promise<any>} - The response data from the API.
 */
export async function fetchDataFromPredictlHQAPI(queryParams?: any): Promise<any> {
  try {
    const url = new URL(API_URL);
    const params = new URLSearchParams();

    if (queryParams?.location) {
      const coordinates = await geocode(queryParams.location);
      if (coordinates) {
        params.append('location_around.origin', `${coordinates.lat},${coordinates.lng}`);
        params.append('location_around.offset', '20km'); 
      } else {
        console.warn(`Could not geocode location: ${queryParams.location}`);
      }
    } else {
      // Default to Los Angeles if no location is provided 34.0549076, -118.242643
      params.append('location_around.origin', `${LA_LAT},${LA_LNG}`);
      params.append('location_around.offset', DEFAULT_RADIUS);
    }

    // Add other query parameters
    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => {
        if (key !== 'location') {
          params.append(key, String(value));
        }
      });
    }

    const response = await fetch(`${API_URL}?${params.toString()}`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Accept': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}



/**
 * Fetches location suggestions based on the provided query string.
 *
 * @param {string} query - The search query to fetch suggestions for.
 * @return {Promise<string[]>} An array of location suggestions.
 */
export async function getLocationSuggestions(query: string): Promise<string[]> {
  if (query.length <= 2) {
    return [];
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=us&limit=4`,
      {
        headers: {
          'User-Agent': 'YourAppName/1.0' // Replace with your app name
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch suggestions');
    }

    const data: NominatimResult[] = await response.json();
    return data.map(item => {
      const parts = item.display_name.split(', ');
      return parts.slice(0, -1).join(', '); // Remove the last part (country name)
    });
  } catch (error) {
    console.error('Error fetching location suggestions:', error);
    return [];
  }
}


/**
 * Fetches a list of events from the PredictHQ API based on the provided search term and location.
 *
 * @param {string} searchTerm - The search term to filter events by.
 * @param {string} location - The location to filter events by.
 * @param {number} [limit=20] - The maximum number of events to return.
 * @param {number} [offset=0] - The offset from which to start returning events.
 * @return {Promise<any[]>} An array of event objects.
 */
export async function fetchEvents(searchTerm: string, location: string, limit: number = 20, offset: number = 0): Promise<any[]> {
  const apiKey = process.env.PREDICTHQ_API_KEY
  const baseUrl = 'https://api.predicthq.com/v1/events/'

  const params = new URLSearchParams({
    q: searchTerm,
    location: location,
    limit: limit.toString(),
    offset: offset.toString(),
    // Add any other necessary parameters
  })

  const response = await fetch(`${baseUrl}?${params.toString()}`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Accept': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error('Failed to fetch events')
  }

  const data = await response.json()
  return data.results.map((event: any) => ({
    id: event.id,
    title: event.title,
    description: event.description,
    start: event.start,
    end: event.end,
    location: event.location,
    // Map other relevant fields
  }))
}