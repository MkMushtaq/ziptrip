import { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import InfiniteScroll from 'react-infinite-scroll-component'
import { EventAccordion } from './EventAccordian'
import { Event } from "@/utils/types"
import { useEventListData } from "@/app/hooks/useEventListData"
interface EventListProps {
    events: Event[]
    isLoading: boolean
    loadMore: () => Promise<{ events: Event[], totalCount: number }>
    initialTotalCount: number
}

const EventList: React.FC<EventListProps> = ({ events: initialEvents, isLoading, loadMore, initialTotalCount }) => {
    const { events, totalCount, fetchMoreData } = useEventListData(initialEvents, initialTotalCount, loadMore);

    const hasMore = events.length < totalCount

    if (isLoading && events.length === 0) {
        return (
            <div className="space-y-4">
                {Array(3).fill(0).map((_, index) => (
                    <Card key={index} className="bg-gray-800 border-gray-700">
                        <CardContent className="p-4">
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-3/4 bg-gray-700" />
                                <Skeleton className="h-4 w-1/2 bg-gray-700" />
                                <Skeleton className="h-4 w-2/3 bg-gray-700" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )
    }

    return (
        <InfiniteScroll
            dataLength={events.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className="space-y-4">
                <EventAccordion events={events} />
            </div>
        </InfiniteScroll>
    )
}

export default EventList

