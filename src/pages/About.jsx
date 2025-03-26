import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <h1 className="section-title">About Me</h1>
      <div className="about-content">
        <p className="about-text">
          Hi! I'm a user-centered designer, focused on creating streamlined experiences.
        </p>
        <div className="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Design</h3>
              <ul>
                <li>UI/UX Design</li>
                <li>User Research</li>
                <li>Prototyping</li>
                <li>Wireframing</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools</h3>
              <ul>
                <li>Figma</li>
                <li>Adobe Creative Suite</li>
                <li>Sketch</li>
                <li>InVision</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Photography</h3>
              <ul>
                <li>Digital Photography</li>
                <li>Photo Editing</li>
                <li>Composition</li>
                <li>Lighting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
