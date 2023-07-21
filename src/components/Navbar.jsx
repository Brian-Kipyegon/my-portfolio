import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import '../App.css';



function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const navigation = useNavigate();

  useEffect(() => {
    const location = window.location.pathname;
    setActiveLink(location.slice(1))
  }, [])

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = (route) => {
    setActiveLink(route);
    setIsActive(false);
    navigation(route);
  }


  return (
    <div className="App">
      <header className="App-header">
        <nav className={`navbar`}>
          {/* logo */}
          <a href='/' className={`logo`}>BRIAN<span>.</span></a>

          <ul className={`navMenu ${isActive ? "active" : ''}`}>
            <li onClick={() => removeActive("home")} className={`${activeLink == "home" ? "current" : ""}`}>
              <Link to="/" className={`navLink`}>Home</Link>
            </li>
            <li onClick={() => removeActive("about")} className={`${activeLink == "about" ? "current" : ""}`}>
              <Link to="/about" className={`navLink`}>About</Link>
            </li>
            <li onClick={() => removeActive("portfolio")} className={`${activeLink == "portfolio" ? "current" : ""}`}>
              <Link to="/portfolio" className={`navLink`}>Portfolio</Link>
            </li>
            <li onClick={() => removeActive("contact")} className={`${activeLink == "contact" ? "current" : ""}`}>
              <Link className={`navLink`}>Contact</Link>
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
