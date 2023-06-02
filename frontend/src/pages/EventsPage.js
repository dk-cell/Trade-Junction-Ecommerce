import React, { useEffect } from "react";
import Header from "../components/Layout/Header";
import EventCard from "../components/Events/EventCard";
import Loader from "../Loader";
import { useSelector } from "react-redux";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeader={4} />
          <EventCard active={true} data={allEvents && allEvents[allEvents.length-1]} />
        </div>
      )}
    </>
  );
};

export default EventsPage;
