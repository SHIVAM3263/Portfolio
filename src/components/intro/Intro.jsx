import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import profilePic from '../../assets/profile.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profilePic} alt="Profile-picture" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed Projects</small>
            </article>
          </div>
          <p>Recent Computer Science graduate with a good knowledge of Software Development Lifecycle concepts and strong foundation in web
            development technologies, including HTML, CSS, and JavaScript. Proficient in backend development using Flask and experienced with
            React. Eager to launch a career with a focus on designing, building, and supporting applications in
            alignment with business requirements.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro