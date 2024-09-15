import React from 'react';
import '../styles/Team.css'
import TeamMemberProfile from '../components/TeamMemberProfile.jsx'

const Team = () => {
  return (
    <div className="page-container">
      <h1>Meet the Execs</h1>
      <div className="exec-container">
        <TeamMemberProfile
          name="Hailey Moretto"
          position="Co-President"
          image="./exec-hailey.jpg"
        />
        <TeamMemberProfile
          name="Doris Xu"
          position="Co-President"
        />
        <TeamMemberProfile
          name="Oceanna Liu"
          position="VP Internal"
        />
        <TeamMemberProfile
          name="Gabriel Lau"
          position="VP Events"
        />
        <TeamMemberProfile
          name="Luke Fatovich"
          position="VP Events"
          image="./exec-luke.jpg"
        />
        <TeamMemberProfile
          name="Jerica Xu"
          position="Treasurer"
        />
        <TeamMemberProfile
          name="Kyle Thompson"
          position="VP Excursions"
          image="./exec-kyle.jpg"
        />
        <TeamMemberProfile
          name="Martin Bardhi"
          position="VP Excursions"
        />
        <TeamMemberProfile
          name="Jordan Lee"
          position="VP Socials"
          image="./exec-jordan.jpg"
        />
        <TeamMemberProfile
          name="Ash Lam"
          position="VP Marketing"
        />
        <TeamMemberProfile
          name="Alfred JainSingh"
          position="VP Media"
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

