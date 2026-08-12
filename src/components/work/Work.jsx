import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './work.css';

const Work = () => {
  const roles = [
    {
      id: 1,
      title: 'Senior Project Technical Assistant',
      company: 'SAFE — IIT Bombay',
      duration: 'Feb 2024 – Present',
      highlights: [
        'Built an automated answer-sheet grading module that extracts handwritten roll numbers from scanned exam PDFs using a TrOCR (PyTorch) pipeline with OpenCV preprocessing (deskew, contrast enhancement, upscaling), auto-crops per-question answer images, and exports a graded-submissions CSV — replacing the instructors\' manual sorting workflow.',
        'Offloaded the ~1.3 GB OCR model and image-extraction work onto dedicated, isolated Celery queues separate from the web and proctoring workers, and built an async polling job system with deadline-based recovery for stuck jobs; diagnosed and fixed a native tokenizer segfault that was crashing the OCR worker.',
        'Redesigned attendance proximity verification for iOS after MAC address deprecation by implementing a custom BLE scanning and advertising mechanism with device identity persistence using the iOS Keychain.',
        'Implemented a submission recovery mechanism using browser local storage and backend reconciliation logic, allowing students to resume interrupted quizzes without data loss.',
        'Built a scientific calculator and an instructor–student chat for the iOS examination app, supporting in-exam calculations and post-quiz query resolution.',
        'Diagnosed and resolved production-breaking issues across quiz submission, webquiz and attendance flows by tracing execution across Django views, Celery workers and frontend state; stabilized asynchronous submission processing by fixing data-type inconsistencies and adding a locking mechanism to prevent concurrent Celery task execution.',
      ],
    },
  ];

  return (
    <section id="experience">
      <h5>Where I've Worked</h5>
      <h2>Experience</h2>
      <div className="container work__container">
        {roles.map((role) => (
          <article className="work__item" key={role.id}>
            <div className="work__item-head">
              <div>
                <h3>{role.title}</h3>
                <h4>{role.company}</h4>
              </div>
              <span className="work__duration">{role.duration}</span>
            </div>
            <ul className="work__highlights">
              {role.highlights.map((point, index) => (
                <li key={index}>
                  <BsFillPatchCheckFill className="work__icon" />
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
