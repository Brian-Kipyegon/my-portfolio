import { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = (e) => {
    e.preventDefault();
    window.open(`mailto:kipyegon.c.brian@gmail.com?subject=Message from ${email}&body=${message}`);
  }

  return ( 
    <div id='contact-section' className='content-contact'>
      <div className='content-centre'>
        <div className='info-container'>
          <h1 className="sub-title">Contact Me</h1>
          <p><i className="fa-regular fa-envelope"></i><a href="mailto:kipyegon.c.brian@gmail.com">kipyegon.c.brian@gmail.com </a> </p>
          <p> <i className="fa fa-phone-square-alt"></i>  +254-724027844</p>
          <div className="social-icons">
            <a href="https://github.com/Brian-Kipyegon"> <i className="fab fa-github-square"></i></a>
            <a href="https://www.linkedin.com/in/brian-kipyegon-a52a23225/"> <i className="fab fa-linkedin"></i> </a>
          </div>
        </div>
        <div className="form-container">
          <form className="form">
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="email" name="email" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="textarea">Message</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="textarea" id="textarea" rows="15" cols="50" required=""></textarea>
            </div>
            <button onClick={sendMail} className="form-submit-btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
