import React from 'react';
import "./app.css";
import Navbar from './Navbar.jsx';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Heading from './Components/heading.jsx';
import Pic from './Components/Pic.jsx';
import About from './Components/About.jsx';
import Color from './Components/Color.jsx';
import Settings from './Components/Settings.jsx';
import Fast from './Components/Fast.jsx';
import Client from './Components/Client.jsx';
import Latest from './Components/Latest.jsx';
import Links from './Components/Links.jsx';


const App = () => {
  return (
    <>
    <div className='container'>


      <div className="social-icons">
        <div className="icon-circle">
          <FaFacebookF />
        </div>
        <div className="icon-circle">
          <FaLinkedinIn />
        </div>
        <div className="icon-circle">
          <FaTwitter />
        </div>

      </div>

      <Navbar />
      <div className="heading-container">
        <Heading />

      </div>
      <div className='gallery'>
        <Pic />
      </div>
      <div className='next-section'>
        <About />
        <div className='tags-section'>
          <Color />
        </div>
        <div className='const-section'>
          <Settings />
        </div>
        <div className='meals-section'>
          <Fast />
        </div>
        <div className='say-section'>
          <Client />
        </div>
        <div className='sed-section'>
          <Latest />
        </div>
        <div className='quick-section'>
          <Links />
        </div> 
      </div>

    </div>

</>
  );


}

export default App;
