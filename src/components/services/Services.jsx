import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id="services">
      <h5>Work</h5>
      <h2>Roles & Responsibility</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Website Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' / >
                <p>Creating a site design from scratch.
                </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' / >
                <p>Logo Design in Photoshop.
                </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' / >
                <p>Wireframes and Template Design for the Website
                </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' / >
                <p>Landing Page Design.
                </p>
            </li>

            {/* <li>
              <BiCheck className='service_list-icon' / >
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </li> */}
          </ul>
          </article>
          {/*end of UI/UX*/}

          <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' / >
                <p>Website design and development
                </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' / >
                <p>Website migration from coding platform to WordPress
                </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' / >
                <p>PSD to WordPress / HTML
                </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' / >
                <p>Carryover of the content on website pages and blogs
                </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' / >
                <p>Static Web Page Design
                </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' / >
                <p>Responsiveness and SEO Implementation
                </p>
            </li>
             {/*
            <li>
              <BiCheck className='service_list-icon' / >
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </li> */}
          </ul>
          </article>

           {/*end of Web Development*/}

          <article className='service'>
          <div className='service_head'>
            <h3>Website Maintenance</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' / >
                <p>Review and QA of the website
                </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' / >
                <p>Broken images, design defects fixes
                </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' / >
                <p>Google insight tool, GT-Metrix for site speed
                </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' / >
                <p>Web Accessibility, Color Contrast, and VFI Fixes for the website
                </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' / >
                <p>Annual Review of the website
                </p>
            </li>
          </ul>
          </article>
              {/*end of Content Creation*/}

      </div>
    </section>
  )
}

export default services