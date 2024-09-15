import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'
import RockCanvas from '../components/Rock.jsx'

const Home = () => {
    return (
        <div className="page-container">
            <div className="logo-graphic">
              <img src='./black-logo.png'/>
            </div>
          <h1> Just Send It! </h1>
          <div className="main-about">
            <p> 
              <strong>UCBoulder</strong> is about 10% climbing, 90% socializing. Whether
              you're a new climber or a seasoned veteran, check out UCBoulder for
              sweet events and opportunities to connect with other students!
            </p>
          </div>
          <Link className="black-button" to="/join">
            Join Now!
          </Link>
          <div style={{ width: '100vw', height:'60vh', padding:0, margin: 0 }}>
            <RockCanvas/>
          </div>
          <h2> Sponsors</h2>
          <div className="sponsors">
            <img src='./bolder_logo_black.png'/>
            <img src='./la-sportiva-logo-B14D5395E4-seeklogo.com.png'/>
            <img src='./Metolius - Cross Clipper - Modern.jpg'/>
            <img src='./Petzl-logo-black.png'/>
            <img src='./Mad-Rock_M_black_.png'/>
          </div>
        </div>
    );
};

export default Home;
