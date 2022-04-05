import React from 'react'
import EventList from '../components/events/event-list';
import EventSearch from '../components/events/event-search';
import { getFeaturedEvents } from '../dummy-data';

function HomePage() {
  const featureEvents = getFeaturedEvents();

  return (
    <div>
            {/* <EventSearch/> */}

      <EventList items={featureEvents}/>
    </div>
  )
}

export default HomePage