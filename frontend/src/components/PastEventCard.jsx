import React from 'react';
import '../styles/PastEventCard.css';

const PastEventCard = ({ title, image, description }) => {
  return (
    <div className="past-event-card">
      <h2 className="past-event-title">{title}</h2>
      
      {image && (
        <div className="past-event-image">
          <img src={image} alt={title} />
        </div>
      )}
      <p className="past-event-description">{description}</p>
    </div>
  );
};

export default PastEventCard;
