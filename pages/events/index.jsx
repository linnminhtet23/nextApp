import React, { Fragment } from 'react'
import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/event-search';

function AllEventsPage() {
  const events =getAllEvents();
  return (
    <Fragment>
      <EventList items={events}/>
    </Fragment>
  )
}

export default AllEventsPage