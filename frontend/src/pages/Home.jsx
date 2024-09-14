import React from 'react';
import '../styles/Home.css'
import BlackBoulderLogo from '../assets/black-logo.png'
import SportivaLogo from '../assets/la-sportiva-logo-B14D5395E4-seeklogo.com.png'
import BolderLogo from '../assets/bolder_logo_black.png'
import TensionClimbingLogo from '../assets/tension_climbing.png'

const Home = () => {
    return (
        <div className="home-container">
            <div className="logo-graphic">
              <img src={BlackBoulderLogo}/>
            </div>
          <h1> We love rocks...</h1>
          <div className="main-about">
            <p> 
              UCBoulder is about 10% climbing, 90% socializing. Whether
              you're a new climber or a seasoned veteran, check out UCBoulder for
              sweet events and opportunities to connect with other students!
            </p>
          </div>
          <button className="black-button">
            Join Now!
          </button>
          <h2> Sponsors!!</h2>
          <div className="sponsors">
            <img src={SportivaLogo}/>
            <img src={BolderLogo}/>
            <img src={TensionClimbingLogo}/>
          </div>
        </div>
    );
};

export default Home;
