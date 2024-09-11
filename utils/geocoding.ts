interface GeocodingResult {
  lat: number;
  lng: number;
}

export async function geocode(location: string): Promise<GeocodingResult | null> {
  const encodedLocation = encodeURIComponent(location);
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedLocation}&limit=1`;

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'ZipTrip/1.0' 
      }
    });

    if (!response.ok) {
      throw new Error('Geocoding request failed');
    }

    const data = await response.json();

    if (data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error during geocoding:', error);
    return null;
  }
}
