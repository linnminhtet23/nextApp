import React from 'react'
import { getFeaturedEvents } from '../dummy-data';

function HomePage() {
  const featureEvents = getFeaturedEvents();

  return (
    <div>
      <ul></ul>
    </div>
  )
}

export default HomePage