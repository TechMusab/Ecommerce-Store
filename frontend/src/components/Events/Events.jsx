import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import styles from '../../styles/styles'
import EventCard from "./EventCard";

const Events = () => {
  const {allEvents,isLoading} = useSelector((state) => state.events);  
   
  return (
    <div>
  {!isLoading && (
    <div className={`${styles.section} bg-gray-900 p-6 rounded-lg mb-12`}>
      <div className={`${styles.heading}`}>
        <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Popular Events
        </h1>
      </div>

      <div className="w-full grid gap-6">
        {allEvents.length !== 0 ? (
          <EventCard data={allEvents && allEvents[0]} />
        ) : (
          <h4 className="text-center text-gray-400 text-lg font-semibold">
            No Events Available!
          </h4>
        )}
      </div>
    </div>
  )}
</div>

  )
}

export default Events