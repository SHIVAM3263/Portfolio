import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  const skillGroups = [
    {
      id: 1,
      title: 'Languages',
      skills: ['Python', 'C++', 'JavaScript'],
    },
    {
      id: 2,
      title: 'Backend',
      skills: ['Django', 'Flask', 'REST APIs', 'SQL', 'Celery', 'Async Tasks'],
    },
    {
      id: 3,
      title: 'ML / CV',
      skills: ['PyTorch', 'Hugging Face', 'TrOCR', 'OpenCV', 'OCR'],
    },
    {
      id: 4,
      title: 'Frontend',
      skills: ['React', 'Vue.js', 'Next.js', 'HTML', 'CSS'],
    },
    {
      id: 5,
      title: 'Mobile',
      skills: ['Android (Java)', 'iOS (Swift)'],
    },
    {
      id: 6,
      title: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'Linux', 'Selenium', 'Android Studio', 'Xcode'],
    },
    {
      id: 7,
      title: 'Core CS',
      skills: ['Data Structures', 'Operating Systems', 'System Design', 'DBMS'],
    },
  ];

  return (
    <section id="skills">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <h3>{group.title}</h3>
            <div className="experience__content">
              {group.skills.map((skill) => (
                <article className="experience__details" key={skill}>
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>{skill}</h4>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
