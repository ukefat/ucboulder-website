import React from 'react';
import '../styles/UpcomingEventCard.css';

const UpcomingEventCard = ({ title, where, when, description, signup }) => {
  return (
    <div className="event-card">
      <h3 className="event-title">{title}</h3>
      {description && (
        <p className="event-description">{description}</p>
      )}
      <p className="event-where"><strong>Where:</strong> {where?where:"TBD"}</p>
      <p className="event-when"><strong>When:</strong> {when?when:"TBD"}</p>
      {signup && (
        <div className="event-signup">
          <a href={signup} className="signup-button">Click to Sign Up!</a>
        </div>
      )}
    </div>
  );
};

export default UpcomingEventCard;
