import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className='about_me_image'>
            <img src={ME} alt="About me image" />
          </div>

        </div>

        <div className='about_content'>
          <div className='about-cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3.2 Years</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Thomson Reuters</h5>
              <small>Web Developer</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>MatrIoT Solutions</h5>
              <small>Internship</small>
            </article>
          </div>

          <p>My experience aligns with multiple website development/maintenance projects at Thomson Reuters. Over the past 3.2 years, as a front-end developer, I have designed, developed, and customized highly responsive and compatible websites.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>

        </div>
      </div>

    </section>
  )
}

export default about