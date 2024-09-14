import React from 'react';
import '../styles/TeamMemberProfile.css';

const TeamMemberProfile = ({ image, name, position }) => {
  return (
    <div className="team-member-profile">
      {image && (
        <div className="team-member-image">
          <img src={image} alt={name} />
        </div>
      )}

      <h2 className="team-member-name">{name}</h2>
      <p className="team-member-position">{position}</p>
    </div>
  );
};

export default TeamMemberProfile;
