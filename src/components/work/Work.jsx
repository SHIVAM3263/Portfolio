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
        'Implemented student answer recovery for the web quiz used in high-stakes assessments such as IIT Bombay PhD and MS admission tests: browser local-storage snapshots restorable after a reload or browser crash, plus a password-gated restore from server-side snapshots for power loss or machine shutdown, so candidates keep their answers through a mid-exam failure on exams that cannot be re-run.',
        'Built an offline answer-sheet digitization module that replaces instructors\' manual zip-and-CSV preparation: TrOCR (PyTorch) reads handwritten roll numbers after OpenCV preprocessing (deskew, contrast enhancement, upscaling), instructors correct low-confidence reads, and per-question answer crops load as gradable submissions.',
        'Profiled the OCR pipeline\'s peak memory on the production software stack (kernel high-water mark), catching a 4.8 GB model-load spike that a steady-state estimate had missed, and built a concurrency sizing model holding the feature to ~5.1 GB worst case within the server\'s ~7.9 GB of free RAM, bounding a spike that could otherwise have exhausted memory on a server running live exams.',
        'Isolated the ~1.3 GB TrOCR model and PDF rendering on dedicated Celery queues away from web and proctoring workers, added deadline-based recovery for crashed jobs, and fixed a native tokenizer segfault in the OCR worker.',
        'Built iOS exam-app modules: BLE advertising/scanning for attendance proximity checks after MAC-based device identity stopped working on iOS, with identity persisted in Keychain, plus an in-exam calculator and instructor–student chat.',
        'Resolved production issues across quiz submission, web quiz, and attendance by tracing Django views, Celery workers, and frontend state; added a Redis lock guarding the process-submissions action against repeated triggers.',
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
