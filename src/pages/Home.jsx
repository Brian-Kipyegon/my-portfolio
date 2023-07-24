import '../styles/Home.css';

export default function Home() {

  return (
    <div className="content-section" id='home-section'>
      <h1 className='name-title'>Brian Kipyegon</h1>
      <p className='job-title'>Software Engineer</p>
      <p className="intro-statement">I build accessible, user-friendly software products and digital experiences for the web.</p>
      <div className='profile-icons'>
        <a href="https://github.com/Brian-Kipyegon"> <i className="fab fa-github-square fa-3x"></i></a>
        <a href="https://www.linkedin.com/in/brian-kipyegon-a52a23225/"> <i className="fab fa-linkedin fa-3x"></i> </a>
      </div>
    </div>
  )
}
