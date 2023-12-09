import React,{useState} from 'react';
import './portfolio.css';
import img1 from '../../assets/Weather-screenshot.jpg';
import img2 from '../../assets/Todo-Screenshot.jpg';
import img3 from '../../assets/Unsplash-Screenshot.jpg';
import img4 from '../../assets/bank-Screenshot.jpg';
import img5 from '../../assets/Emosic-Screenshot.jpg';
import img6 from '../../assets/Netflix-screenshot.jpg';


const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Weather App',
      category: 'Web Development',
      img:img1,
      description:
        'a simple weather app that allows users to check the weather for a specific location as user type and toggle between Celsius and Fahrenheit temperature units.',
      technologies: 'React',
      link: 'https://weather-app-delta-vert.vercel.app/',
      github: 'https://github.com/SHIVAM3263/WeatherApp',
    },
    {
      id: 2,
      title: 'Todo App',
      category: 'Web Development',
      img:img2,
      description:
        'A simple keeper app that allows users to keep record of your tasks by creating todos, updating them and deleting them.',
      technologies: 'React',
      link: 'https://to-do-brown-beta.vercel.app/',
      github: 'https://github.com/SHIVAM3263/To-Do-App',
    },
    {
      id: 3,
      title: 'Image search App',
      category: 'Web Development',
      img:img3,
      description: 'An image search web app in which users gets images displayed according to the typed text if found',
      technologies: 'React',
      link: 'https://unsplash-clone-psi.vercel.app/',
      github: 'https://github.com/SHIVAM3263/Tars-coding-challange',
    },
    {
      id: 4,
      title: 'Bank Management System',
      img:img4,
      category: 'others',
      description:
        'Implemented a console-based Bank Management System in C++ which allows users to create accounts, update information, perform transactions, and view account details.',
      technologies: 'C++',
      link: 'https://github.com/SHIVAM3263/Bank-Management-system',
      github: 'https://github.com/SHIVAM3263/Bank-Management-system',
    },
    {
      id: 5,
      title: 'Emosic',
      img:img5,
      category: 'others',
      description:
        'A website in which users can get songs recommended on the basis of their facial emotion built using python,flask andHTML,CSS and JavaScript.',
      technologies: 'Python|Flask|Machine Learning|HTML|CSS|Javascript',
      link: 'https://github.com/SHIVAM3263/Emosic',
      github: 'https://github.com/SHIVAM3263/Emosic',
    },
    {
      id: 6,
      title: 'Netflix-clone',
      img:img6,
      category: 'Web Development',
      description:
        'A website similiar to movie streaming like netlflix or disney+ in which users can view movie or tv shows of any genre.',
      technologies: 'React | Redux',
      link: 'https://netflix-clone-zeta-brown-92.vercel.app/',
      github: 'https://github.com/SHIVAM3263/Netflix-clone',
    }
  ];
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
        <button
            className={`btn btn-primary ${activeCategory === 'All' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('All')}
          >
            All
          </button>
          <button
            className={`btn btn-primary ${activeCategory === 'Web Development' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Web Development')}
          >
            Web Development
          </button>
          <button
            className={`btn btn-primary ${activeCategory === 'Cyber Security' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('others')}
          >
           Others
          </button>
        </div>
        <div className='project__container'>
        {filteredProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
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
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
