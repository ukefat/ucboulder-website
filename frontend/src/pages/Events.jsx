import React from 'react';
import '../styles/Event.css'
import UpcomingEventCard from '../components/UpcomingEventCard.jsx'
import PastEventCard from '../components/PastEventCard.jsx'

const Events = () => {
  return (
    <div className="page-container">
      <h1>Events</h1>
      <h2>Upcoming Events</h2>
        <div className="event-container">
          <UpcomingEventCard
            title="Weekly Basement Meetups"
            when="Every Wednesday from 2-4pm and every Friday from 4-6pm"
            where="UofC Basement Wall"
            description="Join us twice a week for some climbing and socializing!"
          />
          <UpcomingEventCard
            title="Back to School BBQ"
            when="September 20 from 6-9pm"
            where="Edworthy Park"
            description="Food, fun, activities and more!!"
            signup="https://tr.ee/VZ1OVahEHl"
          />
          <UpcomingEventCard
            title="Bolder Nights"
            when="bi-weekly starting September 21, Saturdays at 7pm"
            where="Bolder Climbing Community"
            description="Join us for climbing at an actual bouldering gym!"
          />
          <UpcomingEventCard
            title="Outdoor Crag Meetup"
            when="September 22"
          />
          <UpcomingEventCard
            title="Frankslide Bouldering Trip"
            when="September 28-30"
          />
        </div>
      <h2>Past Events</h2>
        <div className="event-container">
        <PastEventCard
          title="Frank Slide Summer 2024"
          description="Spent amazing time at Frank Slide and camped at Lundbreck Falls!"
          image="./frank-slide-summer-2024.JPG"
        />
      </div>
    </div>
  );
};

export default Events;
