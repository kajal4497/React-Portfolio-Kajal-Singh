import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com' 

const Contact = () => {
  const formdata = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ye4k44h', 'template_v7847yi', formdata.current, 'B8s05GsCrl2QvMN2r')
      e.target.reset()
  };

  return (
    <section id="contact">
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

     <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
          <MdOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>kajalramraj4497@gmail.com</h5>
          <a href="mailto:kajalramraj4497@gmail.com">Send a Message</a>
        </article>

        <article className='contact_option'>
          <RiMessengerLine className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>Kajal Singh</h5>
          <a href="https://m.me/ernest.achiever">Send a Message</a>
        </article>

        <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <h5>9663013672</h5>
          <a href="https://api.whatsapp.com/send?phone=9663013672">Send a Message</a>
        </article>

      </div>
      <form ref = { formdata } onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type="submit" className='btn btn-primary'>Send Message</button>

      </form>

     </div>

    </section>
  )
}

export default Contact