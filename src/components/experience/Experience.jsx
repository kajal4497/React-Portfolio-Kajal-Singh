import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'


export const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development </h3>
          <div className='experience_content'>
            
          <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/ >
                <div>
                  <h4>ReactJs</h4>
                </div>
                
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' / >
                <div>
                  <h4>HTML5</h4>
                </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/ >
                <div>
                  <h4>CSS3</h4>
                </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/ >
                <div>
                  <h4>JavaScript</h4>
                </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/ >
                <div>
                  <h4>Bootstrap</h4>
                </div>
            </article>

          
          </div>
        <div>
      </div>
     </div>
   {/* front end  */}
      <div className='experience_backend'>
        <h3>Backend Development </h3>
          <div className='experience_content'>
            
            {/* <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/ >
              <div>
                  <h4>MongoDB</h4>
              </div>
              
            </article> */}

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/ >
              <div>
                <h4>Mysql</h4>
                
              </div>
              
            </article>

            {/* <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/ >
              <div>
                <h4>PHP</h4>
              </div>
              
            </article> */}

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/ >
              <div>
                <h4>Nodejs</h4>
              </div>
              
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/ >
              <div>
                <h4>Expressjs</h4>
              </div>
             
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/ >
              <div>
                <h4>MongoDB</h4>
              </div>
             
            </article>
      </div>

        </div>
        <div className='experience_backend'>
        <h3>Design </h3>
          <div className='experience_content'>
            
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/ >
              <div>
                  <h4>Canva</h4>
              </div>
              
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/ >
              <div>
                  <h4>Photoshop</h4>
              </div>
              
            </article>
            {/* <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/ >
              <div>
                  <h4>Figma</h4>
              </div>
              
            </article> */}
            </div>
            
      </div>
      </div>
    </section>
  )
}
export default experience