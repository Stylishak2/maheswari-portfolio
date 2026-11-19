import "./About.css";

import maheshwari from "../../assets/maheswari.png";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={maheshwari} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Frontend Developer with 2.5 years of experience specializing in React.js, Next.js, and JavaScript (ES6+). Skilled in building responsive, interactive, and user-friendly web applications with reusable components, REST API integration, and optimized performance.
              
            </p>
            <p>
              Experienced in developing scalable frontend applications and migrating React.js projects to Next.js using Server-Side Rendering (SSR) and hybrid rendering. Strong knowledge of responsive design, cross-browser compatibility, and modern frontend development best practices.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              {" "}
              <p>Javascript</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>Reactjs</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>Nextjs</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievement">
       <div className="about-achievements">
  <h1>2.5+</h1>
  <p>Years of Experience</p>
</div>

<hr />

<div className="about-achievements">
  <h1>5+</h1>
  <p>Projects Completed</p>
</div>

<hr />

<div className="about-achievements">
  <h1>2+</h1>
  <p>Happy Clients</p>
</div>

<hr />

<div className="about-achievements">
  <h1>100%</h1>
  <p>Client Satisfaction</p>
</div>
      </div>
    </div>
  );
};

export default About;
