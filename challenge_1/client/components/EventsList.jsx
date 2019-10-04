import React from 'react';

import EventsListEntry from './EventsListEntry.jsx';

const EventsList = ({ events }) => {
  return (
    <div>
      {events.map((event, i) => <EventsListEntry key={i} event={event}/>)}
    </div>
  )
}

export default EventsList;