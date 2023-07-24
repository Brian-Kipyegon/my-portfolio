import { useState, useEffect } from 'react';
import '../App.css';



function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const location = window.location.pathname;
    setActiveLink(location.slice(2))
  }, [])

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = (route) => {
    setActiveLink(route);
    setIsActive(false);
  }


  return (
    <div className="App">
      <header className="App-header">
        <nav className={`navbar`}>
          {/* logo */}
          <a href='/' className={`logo`}>BRIAN<span>.</span></a>

          <ul className={`navMenu ${isActive ? "active" : ''}`}>
            <li onClick={() => removeActive("home")} className={`${activeLink == "home" ? "current" : ""}`}>
              <a href="#home-section" className={`navLink`}>Home</a>
            </li>
            <li onClick={() => removeActive("about")} className={`${activeLink == "about" ? "current" : ""}`}>
              <a href="#about-section" className={`navLink`}>About</a>
            </li>
            <li onClick={() => removeActive("portfolio")} className={`${activeLink == "portfolio" ? "current" : ""}`}>
              <a href="#portfolio-section" className={`navLink`}>Portfolio</a>
            </li>
            <li onClick={() => removeActive("contact")} className={`${activeLink == "contact" ? "current" : ""}`}>
              <a href="#contact-section" className={`navLink`}>Contact</a>
            </li>
          </ul>

          <div className={`hamburger ${isActive ? 'active' : ''}`}  onClick={toggleActiveClass}>
            <span className={`bar`}></span>
            <span className={`bar`}></span>
            <span className={`bar`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}


export default Navbar;
