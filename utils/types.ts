export interface Event {
    id: string
    title: string
    date: string
    geo: {
        address: {
            formatted_address: string
        }
    }
    predicted_event_spend: number,
    predicted_event_spend_industries: any,
    phq_attendance: number
}

export interface NominatimResult {
  display_name: string;
  lat: string;
  lon: string;
}