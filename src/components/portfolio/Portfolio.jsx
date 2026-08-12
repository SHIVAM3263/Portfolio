import React, { useState } from 'react';
import './portfolio.css';
import emosicImg from '../../assets/Emosic-Screenshot.jpg';
import netflixImg from '../../assets/Netflix-screenshot.jpg';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Code Clasher',
      category: 'Full Stack',
      img: null,
      description:
        'A real-time 1v1 competitive coding battle arena where two players race on the same problem with a live health/damage system. Built on Django Channels over WebSockets (Redis channel layer) to sync match state, health and results across clients, with JWT auth, Elo-based ranked matchmaking across skill tiers, and a sandboxed Python execution engine that runs submissions against test cases under per-problem time limits.',
      technologies: 'Django | Django Channels | Daphne/ASGI | Redis | React | Vite',
      link: 'https://code-clasher.vercel.app/',
      github: 'https://github.com/SHIVAM3263/Code-Clasher',
    },
    {
      id: 2,
      title: 'MockMate',
      category: 'AI / ML',
      img: null,
      description:
        'An AI voice interviewer that analyzes a resume, holds a real-time spoken interview and returns a scored feedback report. A Gemini-driven interviewer speaks each question (Deepgram Aura TTS) while the candidate answers by voice, with automatic turn-taking from in-browser silence detection. The interviewer is modeled as a stateful Gemini conversation over the full transcript, using structured outputs (validated Pydantic schemas) for resume parsing, question generation and the final report.',
      technologies: 'Next.js | Django REST | Gemini | Deepgram | PostgreSQL | Docker',
      link: 'https://mock-mate-ecru.vercel.app/',
      github: 'https://github.com/SHIVAM3263/MockMate',
    },
    {
      id: 3,
      title: 'Answersheet Grader',
      category: 'AI / ML',
      img: null,
      description:
        'An automated answer-sheet grading pipeline that extracts handwritten roll numbers from scanned exam PDFs using TrOCR with OpenCV preprocessing (deskew, contrast enhancement, upscaling), auto-crops per-question answer images, and exports a graded-submissions CSV — replacing the manual sorting workflow instructors used to run by hand.',
      technologies: 'Python | PyTorch | Hugging Face TrOCR | OpenCV | Celery',
      link: 'https://github.com/SHIVAM3263/Answersheet-Grader',
      github: 'https://github.com/SHIVAM3263/Answersheet-Grader',
    },
    {
      id: 4,
      title: 'Emosic',
      category: 'AI / ML',
      img: emosicImg,
      description:
        'A website that recommends songs based on the listener\'s facial emotion, using a trained emotion-classification model behind a Flask backend.',
      technologies: 'Python | Flask | Machine Learning | HTML | CSS | JavaScript',
      link: 'https://github.com/SHIVAM3263/Emosic',
      github: 'https://github.com/SHIVAM3263/Emosic',
    },
    {
      id: 5,
      title: 'Netflix Clone',
      category: 'Frontend',
      img: netflixImg,
      description:
        'A movie streaming interface in the style of Netflix or Disney+, where users can browse and view movies and TV shows across any genre.',
      technologies: 'React | Redux',
      link: 'https://netflix-clone-zeta-brown-92.vercel.app/',
      github: 'https://github.com/SHIVAM3263/Netflix-clone',
    },
  ];

  const categories = ['All', 'Full Stack', 'AI / ML', 'Frontend'];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? soloProjects
      : soloProjects.filter((pro) => pro.category === activeCategory);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">
        <div className="togglebuttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn btn-primary ${
                activeCategory === category ? 'active' : ''
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="project__container">
          {filteredProjects.map((pro) => (
            <article className="portfolio__item" key={pro.id}>
              <div className="portfolio__item-image">
                {pro.img ? (
                  <img src={pro.img} alt={pro.title} />
                ) : (
                  <div className="portfolio__item-placeholder">
                    <span className="portfolio__item-initials">
                      {pro.title
                        .split(' ')
                        .map((word) => word[0])
                        .join('')}
                    </span>
                    <span className="portfolio__item-tag">{pro.category}</span>
                  </div>
                )}
              </div>
              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <p className="portfolio__item-tech">{pro.technologies}</p>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                {pro.link !== pro.github && (
                  <a
                    href={pro.link}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
