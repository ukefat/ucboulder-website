import React from 'react';
import TeamMemberProfile from '../components/TeamMemberProfile.jsx'

const Team = () => {
  return (
    <div>
      <h1>Meet the Execs</h1>
      <TeamMemberProfile
        name="Luke Fatovich"
        position="VP Events"
        image="./luke-fatovich.JPG"
      />
      <TeamMemberProfile
        name="Goofy Goober"
        position="VP Nothing"
      />
      <TeamMemberProfile
        name="Goofy Goober"
        position="VP Nothing"
      />
      <TeamMemberProfile
        name="Goofy Goober"
        position="VP Nothing"
      />

    </div>
  );
};

export default Team;

