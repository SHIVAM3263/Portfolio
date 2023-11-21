import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import profilePic from '../../assets/profile.jpg';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="left__container">
        <h5>Hello I'm</h5>
        <h1>Shivam Rawat</h1>
        <h5 className="text-light">
        <Typewriter
            words={['Web developer', 'Coder', 'Engineer']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h5>
        <CTA />
        <HeaderSocials />
      </div>
      <div className="right__container">
        <img src={profilePic} alt="profile" />
      </div>
    </header>
  );
};

export default Header;
