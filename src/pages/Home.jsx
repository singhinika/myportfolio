import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const [latestProjects] = useState([
    {
      id: 1,
      title: "E-Commerce Redesign",
      coverImage: "/images/projects/ecommerce-cover.jpg",
      description: "A complete redesign of an e-commerce platform"
    },
    {
      id: 2,
      title: "Healthcare App",
      coverImage: "/images/projects/healthcare-cover.jpg",
      description: "Mobile application for healthcare management"
    },
    {
      id: 3,
      title: "Smart Home Dashboard",
      coverImage: "/images/projects/smarthome-cover.jpg",
      description: "IoT dashboard for smart home control"
    }
  ]);

  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">
          Creating Digital
          <span className="accent"> Experiences</span>
        </h1>
        <p className="hero-text">
          Welcome to my portfolio. I craft user-centered designs and capture moments through photography.
        </p>
      </section>

      <section className="latest-projects">
        <h2 className="section-title">Latest Projects</h2>
        <div className="projects-grid">
          {latestProjects.map((project) => (
            <Link to={`/design/${project.id}`} key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.coverImage} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
            </Link>
          ))}
        </div>
        <Link to="/design" className="btn view-all">
          View All Projects
        </Link>
      </section>
    </div>
  );
}

export default Home;
