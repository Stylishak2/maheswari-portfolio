
import './Contact.css'
import { useState } from 'react';
import gmail from '../../assets/gmail.png';
import details from '../../assets/details.png';
import map from '../../assets/map.png';

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "bb12bef0-6623-4c75-99c2-308ed18d0dfe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      setResult("Error ❌");
    }
  };

  return (
 <div className="contact" id="contact">
      
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-section">

        <div className="contact-left">
          <h1>Let’s talk</h1>
          <p>I am currently available for new projects</p>

          <div className="contact-details">

            <div className="contact-detail">
              <img className='image' src={gmail} alt='email-icon' />
              <p>kavalimaheswari77@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img className='image' src={details} alt='call-icon' />
              <p>9704468793</p>
            </div>

            <div className="contact-detail">
              <img className='image' src={map} alt='location-icon' />
              <p>Rakkala kondapalli</p>
            </div>

          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>

          <label>Your Name</label>
          <input type='text' placeholder='Enter your name' name='name' required />

          <label>Your Email</label>
          <input type='email' placeholder='Enter your email' name='email' required />

          <textarea name='message' rows="8" placeholder='Enter your message' required></textarea>

          <button type="submit" className='contact-submit'>Submit</button>

          <p>{result}</p>

        </form>

      </div>
    </div>
  )
}

export default Contact;
