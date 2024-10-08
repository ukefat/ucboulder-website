import React from 'react';
import '../styles/Team.css'
import TeamMemberProfile from '../components/TeamMemberProfile.jsx'

const Team = () => {
  return (
    <div className="page-container">
      <div className="page-title">
        <h1>Meet the Execs</h1>
      </div>
      <div className="exec-container">
        <TeamMemberProfile
          name="Hailey Moretto"
          position="Co-President"
          image="./exec-hailey.jpg"
        />
        <TeamMemberProfile
          name="Doris Xu"
          position="Co-President"
          image="./exec-doris.jpg"
        />
        <TeamMemberProfile
          name="Oceanna Liu"
          position="VP Internal"
          image="./exec-oceanna.png"
        />
        <TeamMemberProfile
          name="Gabriel Lau"
          position="VP Events"
          image="./exec-gabriel.jpg"
        />
        <TeamMemberProfile
          name="Luke Fatovich"
          position="VP Events"
          image="./exec-luke.jpg"
        />
        <TeamMemberProfile
          name="Jerica Xu"
          position="Treasurer"
          image="./exec-jerica.jpg"
        />
        <TeamMemberProfile
          name="Kyle Thompson"
          position="VP Excursions"
          image="./exec-kyle.jpg"
        />
        <TeamMemberProfile
          name="Martin Bardhi"
          position="VP Excursions"
          image="./exec-martin.jpg"
        />
        <TeamMemberProfile
          name="Jordan Lee"
          position="VP Socials"
          image="./exec-jordan.jpg"
        />
        <TeamMemberProfile
          name="Ash Lam"
          position="VP Marketing"
          image="./exec-ash.png"
        />
        <TeamMemberProfile
          name="Alfred JainSingh"
          position="VP Media"
          image="./exec-alfred.jpg"
        />
        <TeamMemberProfile
          name="Kate Hawkins"
          position="VP Sponsorships"
        />
        <TeamMemberProfile
          name="Alana Lo"
          position="VP External"
          image="./exec-alana.jpg"
        />
      </div>
    </div>
  );
};

export default Team;

