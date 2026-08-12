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
            <img src={profilePic} alt="Shivam Rawat" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years at IIT Bombay</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Full Stack &amp; ML Projects</small>
            </article>
          </div>
          <p>Software engineer building and maintaining a production academic assessment platform at IIT Bombay,
            contributing across backend, web, Android and iOS modules. I've worked on authentication flows, attendance
            integrity mechanisms, asynchronous processing with Celery, and an ML-powered grading pipeline running in live
            examination environments.</p>
          <p>I'm comfortable debugging large codebases and implementing scalable, reliable logic across systems &mdash;
            from Django and Celery on the backend to Vue, React and native mobile clients on the front.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro