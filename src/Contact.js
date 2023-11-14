import * as React from "react";
import { BsFillEnvelopeFill, BsFillBriefcaseFill, BsFilePersonFill } from 'react-icons/bs'
import Pdf from "./William Lin Resume.pdf";
import { useState } from "react";
import contactdoodle from './images/portfolio-illustration-contact.png'


function Contact(props) {
    
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [cc, setCC] = useState();
  const [honey, setHoney] = useState();
  const [message, setMessage] = useState();

  const messageSmall = () =>{
    console.log(props.width)
    return props.width < 470 ? '30' : '45'
  }

  return (
    <div className="Contact">
        <div className = 'content3'>
        <h2>Contact</h2>
        <p fontWeight= 'bold'>Thanks for viewing, let's stay in touch!</p>
                    <div className= 'text-div'>
        <img className='contactpic' src="" alt= "William Lin Profile"/>

        <form action="https://formsubmit.co/willlin1996@gmail.com" method="POST" className="contactform">
      <label>Name
          <input
        name = 'text'
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full Name'
          required
        />
      </label>
      <label>Email
        <input
        name = 'email'
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
        required
        />
      </label>
      <label>Subject
        <input
        name = 'text'
          type="text" 
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder='Subject'
        />
      </label>
      <label>CC
        <input
        name = 'text'
          type="text" 
          value={cc}
          onChange={(e) => setCC(e.target.value)}
          placeholder='CC'
        />
      </label>
      <label            className='honey'>
        <input 
        className = 'honey'
        name = 'honey'
          type="text" 
          value=''
          onChange={(e) => setHoney(e.target.value)}
          placeholder='CC'
        />
      </label>
      <label className='_autoresponse'>
        <input 
        name = '_autoresponse'
            className='_autoresponse'
          type="text" 
          value="Thank you for reaching out! Due to a high outreach volume, I will respond within 1-3 business days. In the meantime, please do not hesitate to reach out to me via Linkedin or any other social media platforms. I hope you have a wonderful day and I wish you all the best. Sincerely, Will"
          placeholder='CC'
          readOnly
        />
      </label>
      <label>Message
      <textarea 
      rows= '10'
      cols= {messageSmall()}
      placeholder="Your Message" 
      className="form-control" 
      name="message" 
      onClick={(e)=>setMessage(e.target.value)} 
      resize='none'
      required></textarea>
      </label>
      <button type='Submit'>
          Send
      </button>
    </form>
        </div>
    </div>
    </div>
  )
}
export default Contact;