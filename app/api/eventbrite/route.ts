import { NextResponse } from 'next/server';
import axios from 'axios';
import { EVENTBRITE_API_URL } from '@/utils/consts';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');

  if (!keyword || !startDate || !endDate) {
    return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
  }

  const apiKey = process.env.EVENTBRITE_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json({ error: 'Eventbrite API key not configured' }, { status: 500 });
  }

  try {
    const response = await axios.get(EVENTBRITE_API_URL, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
      params: {
        q: keyword,
        'start_date.range_start': startDate,
        'start_date.range_end': endDate,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching events from Eventbrite' }, { status: 500 });
  }
}