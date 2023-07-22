import "../styles/Portfolio.css";
import webconfhome from "../images/webconfhome.JPG";
import coderunner from "../images/coderunner.JPG";

export default function Portfolio() { 

  return (
    <div className="content-portfolio">
      <div className="project-card">
        <div className="title-tag">
          <h3 className="project-title">WebConnect</h3>
          <a href="https://github.com/Brian-Kipyegon">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/brian-kipyegon-a52a23225/">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <p className="project-description">
          WebConnect is a user-friendly and feature-rich Web App designed 
          to facilitate seamless video chats for individuals and teams alike.
          It caters to remote workers, friends and families, and businesses seeking 
          efficient communication and collaboration solutions.
        </p>
        <div className="tech-stack">
          <p className="tech-stack-item">React</p>
          <p className="tech-stack-item">Node.js</p>
          <p className="tech-stack-item">Firebase</p>
          <p className="tech-stack-item">WebRTC</p>
        </div>
        <img src={webconfhome} alt="image" className="project-image" />
      </div>
      <div className="project-card">
          <div className="title-tag">
            <h3 className="project-title">CodeRunner</h3>
            <a href="https://github.com/Brian-Kipyegon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/brian-kipyegon-a52a23225/">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
          <p className="project-description">
            CodeRunner is a powerful and user-friendly Web App designed to
            execute Python and JavaScript source code directly within the browser. 
            It serves as a virtual coding environment, empowering developers and 
            learners to experiment with code, test algorithms, and quickly validate 
            solutions without the need for local installations or setups.
          </p>
          <div className="tech-stack">
            <p className="tech-stack-item">React</p>
            <p className="tech-stack-item">Node.js</p>
            <p className="tech-stack-item">Firebase</p>
          </div>
          <img src={coderunner} alt="image" className="project-image" />
      </div>
    </div>
  )
}
