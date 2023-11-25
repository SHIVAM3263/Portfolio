import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import profilePic from '../../assets/profile.jpg';
import CV from '../../assets/resume.pdf';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
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
      <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
      </div>
      <div className="header__socials">
      <a href="https://www.linkedin.com/in/shivam-rawat-103403216" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/SHIVAM3263" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>  
      </div>
      <div className="right__container">
        <img src={profilePic} alt="profile" />
      </div>
    </header>
  );
};

export default Header;
