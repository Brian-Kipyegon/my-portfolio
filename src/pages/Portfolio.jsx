import "../styles/Portfolio.css";
import webconfhome from "../images/webconfhome.JPG";
import coderunner from "../images/coderunner.JPG";
import fifa_dashboard from "../images/fifa_dashboard.JPG";

export default function Portfolio() { 

  return (
    <div className="content-portfolio" id="portfolio-section">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="project-card">
        <div className="title-tag">
          <a target="_blank" rel="noreferrer" href="https://react-video-chat-v1.netlify.app/">
            <h3 className="project-title">WebConnect</h3>
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/Brian-Kipyegon">
            <i className="fab fa-github"></i>
          </a>
          <a target="_blank" rel="noreferrer" href="https://react-video-chat-v1.netlify.app/">
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
        <a target="_blank" rel="noreferrer" href="https://react-video-chat-v1.netlify.app/">
          <img src={webconfhome} alt="image" className="project-image" />
        </a>  
      </div>
      <div className="project-card">
          <div className="title-tag">
            <a target="_blank" href="https://code-runner-web.netlify.app/" rel="noreferrer">
              <h3 className="project-title">CodeRunner</h3>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Brian-Kipyegon">
              <i className="fab fa-github"></i>
            </a>
            <a target="_blank" href="https://code-runner-web.netlify.app/" rel="noreferrer">
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
          <a target="_blank" href="https://code-runner-web.netlify.app/" rel="noreferrer">
            <img src={coderunner} alt="image" className="project-image" />
          </a>
      </div>
      <div className="project-card">
          <div className="title-tag">
            <a target="_blank" href="https://fifa-match-analysis.onrender.com/" rel="noreferrer">
              <h3 className="project-title">FIFA World Cup Match Analytics Dashboard</h3>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Brian-Kipyegon">
              <i className="fab fa-github"></i>
            </a>
            <a target="_blank" href="https://fifa-match-analysis.onrender.com/" rel="noreferrer">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
          <p className="project-description">
            The FIFA World Cup Match Analytics Dashboard is a dynamic and interactive
            web application developed using Python Flask and Plotly Dash, designed to
            provide comprehensive insights into FIFA World Cup matches. This project
            combines data visualization and web development to deliver an engaging 
            platform for exploring match statistics for all FIFA World Cup matches.
          </p>
          <div className="tech-stack">
            <p className="tech-stack-item">Python</p>
            <p className="tech-stack-item">Flask</p>
            <p className="tech-stack-item">Plotly Dash</p>
          </div>
          <a target="_blank" href="https://fifa-match-analysis.onrender.com/" rel="noreferrer">
            <img src={fifa_dashboard} alt="image" className="project-image" />
          </a>
      </div>
    </div>
  )
}
