import React from 'react';
import '../styles/Join.css'

const Join = () => {
  return (
    <div className='page-container'>
      <div className="page-title">
        <h1>Join Us!</h1>
      </div>
      <div className="apply-about-card">
        <h2>Signup to Become a Member</h2>
        <p>
          As a member of UCBoulder, you will be able to attend our monthly discounted climbing nights at Bolder. Club membership also grants a free membership to the Alpine Club of Canada (valued at 38$ per person; also gives you a 40-50% North Face discount!), a 25% Flashed discount code, 15% Devil's Head Coffee discount code, and Friction Labs discount code. We also have three crash pads to rent for free!
        </p>
        <p>
          In order to facilitate our perks, as well as fund events such as our competitions, outdoor events, barbeques, and socials, we ask for our University of Calgary members to pay a five dollar entrance fee. For people affiliated with other universities in the Calgary area, we ask that you pay a ten dollar entrance fee. The membership is valid for the school year you signed up in and the following summer!
        </p>
        <a className="join-button" href="https://tr.ee/CYADiP0b5K">
          Become a member!
        </a>
      </div>
      <div className="apply-about-card">
        <h2>Apply to Become an Exec</h2>
        <p>
          If you love climbing and want to get involved with this club, let us know what position you would be interested in. Please don't hesitate to apply if even if you are in year 1 or 2, as we have plenty of Jr Exec roles for those looking to get involved, with the possibility of transitioning to a more senior role in upcoming years.
        </p>
        <a className="join-button" href="https://tr.ee/ZK0zNI3Ymb">
          Become an exec!
        </a>
      </div>
    </div>
  );
};

export default Join;
