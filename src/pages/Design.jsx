import '../styles/Design.css';

function Design() {
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Redesign",
      coverImage: "/images/projects/ecommerce-cover.jpg",
      overview: {
        timeline: "4 months",
        client: "Fashion Retailer",
        team: "2 UX Designers, UI Designer, 3 Developers",
        role: "Lead UX Designer"
      },
      problem: "The client's existing e-commerce platform had a high cart abandonment rate and poor mobile experience, leading to decreased sales and customer satisfaction.",
      research: "Through user interviews and analytics analysis, we identified that complex checkout process and lack of mobile optimization were the key pain points. 70% of users reported difficulty in completing purchases on mobile devices.",
      userJourney: "/images/projects/ecommerce-journey.jpg",
      prototype: {
        description: "We developed a streamlined mobile-first checkout process, reducing steps from 5 to 3 while maintaining security and user trust.",
        image: "/images/projects/ecommerce-prototype.jpg",
        video: "/images/projects/ecommerce-demo.mp4"
      }
    },
    {
      id: 2,
      title: "Healthcare App",
      coverImage: "/images/projects/healthcare-cover.jpg",
      overview: {
        timeline: "6 months",
        client: "Medical Technology Startup",
        team: "UX Designer, UI Designer, Product Manager, 2 Developers",
        role: "UX/UI Designer"
      },
      problem: "Patients struggled to manage their medical appointments, prescriptions, and health records across multiple healthcare providers.",
      research: "User surveys revealed that 85% of patients wanted a unified platform for managing their healthcare needs. Key requirements included appointment scheduling, prescription tracking, and secure health record access.",
      userJourney: "/images/projects/healthcare-journey.jpg",
      prototype: {
        description: "Created an intuitive mobile app with a unified dashboard for managing all healthcare needs, featuring secure authentication and real-time updates.",
        image: "/images/projects/healthcare-prototype.jpg",
        video: "/images/projects/healthcare-demo.mp4"
      }
    },
    {
      id: 3,
      title: "Smart Home Dashboard",
      coverImage: "/images/projects/smarthome-cover.jpg",
      overview: {
        timeline: "3 months",
        client: "IoT Company",
        team: "UX Designer, Visual Designer, 2 Developers",
        role: "UX Designer"
      },
      problem: "Users found it difficult to control and monitor multiple smart home devices through separate apps and interfaces.",
      research: "Usability testing showed that users wanted a single, intuitive interface to control all their smart home devices. 90% of users preferred voice commands and quick-access controls.",
      userJourney: "/images/projects/smarthome-journey.jpg",
      prototype: {
        description: "Designed a centralized dashboard with customizable widgets, voice control integration, and automated scene creation.",
        image: "/images/projects/smarthome-prototype.jpg",
        video: "/images/projects/smarthome-demo.mp4"
      }
    }
  ];

  return (
    <div className="design">
      <h1 className="section-title">Design Work</h1>
      <div className="case-studies">
        {caseStudies.map((study) => (
          <article key={study.id} className="case-study">
            <div className="case-study-hero">
              <img src={study.coverImage} alt={study.title} />
              <h2>{study.title}</h2>
            </div>
            
            <section className="case-study-overview">
              <h3>Project Overview</h3>
              <div className="overview-grid">
                <div>
                  <h4>Timeline</h4>
                  <p>{study.overview.timeline}</p>
                </div>
                <div>
                  <h4>Client</h4>
                  <p>{study.overview.client}</p>
                </div>
                <div>
                  <h4>Team</h4>
                  <p>{study.overview.team}</p>
                </div>
                <div>
                  <h4>Role</h4>
                  <p>{study.overview.role}</p>
                </div>
              </div>
            </section>

            <section className="case-study-content">
              <div className="content-section">
                <h3>Problem</h3>
                <p>{study.problem}</p>
              </div>

              <div className="content-section">
                <h3>Research Findings</h3>
                <p>{study.research}</p>
              </div>

              <div className="content-section">
                <h3>User Journey</h3>
                <img src={study.userJourney} alt="User Journey Map" />
              </div>

              <div className="content-section">
                <h3>Prototype</h3>
                <p>{study.prototype.description}</p>
                <div className="prototype-media">
                  <img src={study.prototype.image} alt="Prototype" />
                  <video controls>
                    <source src={study.prototype.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </section>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Design;
