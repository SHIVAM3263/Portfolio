import React,{useState} from 'react';
import './portfolio.css';


const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Adventist Learning Center',
      img:'../../assets/bg.jpg',
      description:
        'Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.',
      technologies: 'Ruby on Rails | SCSS',
      link: 'https://adventistlearningcenter-257375ab1970.herokuapp.com/',
      github: 'https://github.com/Meri-MG/school',
    },
    {
      id: 2,
      title: 'FakeStore',
      category: 'Web Development',
      description:
        'FakeStore app that provides information about available products and their details',
      technologies: 'React | Redux',
      link: 'https://fakestore-metrics.netlify.app/',
      github: 'https://github.com/Meri-MG/Fakestore---react',
    },
    {
      id: 3,
      title: 'To-Do App',
      category: 'Web Development',
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'JavaScript | Webpack',
      link: 'https://meri-mg.github.io/To-Do-List/dist/',
      github: 'https://github.com/Meri-MG/To-Do-List',
    },
    {
      id: 4,
      title: 'Shelter',
      category: 'others',
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'JavaScript | CSS',
      link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
      github: 'https://github.com/Meri-MG/shelter',
    },
    {
      id: 5,
      title: 'World News',
      category: 'others',
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'JavaScript | CSS',
      link: 'https://meri-mg.github.io/Unilab-world-news/',
      github: 'https://github.com/Meri-MG/Unilab-world-news',
    },
    {
      id: 6,
      title: 'Math Resource',
      category: 'others',
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'JavaScript | Scss | Python',
      link: 'https://lukinoo.github.io/math-resource/',
      github: 'https://github.com/lukinoo/math-resource',
    },
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
