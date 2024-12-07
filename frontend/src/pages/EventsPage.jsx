import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header activeHeading={4} />
      <div className="container mx-auto px-4 py-6">
        {isLoading ? (
          <Loader />
        ) : allEvents && allEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allEvents.map((event, index) => (
              <EventCard key={index} active={true} data={event} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            <h2 className="text-2xl font-bold">No Events Available</h2>
            <p>Please check back later for updates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
