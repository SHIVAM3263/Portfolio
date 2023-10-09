import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
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
    </header>
  );
};

export default Header;
