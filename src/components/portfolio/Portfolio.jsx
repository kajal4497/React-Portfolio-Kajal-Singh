import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
// import IMG6 from '../../assets/portfolio6.jpg'

//Do not use the images in production

const data = [
{
  id:1,
  image:IMG1,
  title:'Dashboard Design using HTML and CSS',
  github:'https://kajal4497.github.io/Wordpress-Dashboard/',
  // demo: 'https://dribbble.com/shots/19261807-Aspect-Lab-Web-Design-for-AI-Marketing-Tool'
},
{
  id:2,
  image:IMG2,
  title:'Weather App using HTML, CSS, JavaScript, NodeJS, openWeather API',
  github:'https://github.com',
//   // demo: 'https://dribbble.com/shots/19261807-Aspect-Lab-Web-Design-for-AI-Marketing-Tool'
 },
{
  id:3,
  image:IMG3,
  title:'A Website Design using HTML, CSS, Bootstrap',
  github:'https://kajal4497.github.io/TinDog-Website/',
  // demo: 'https://dribbble.com/shots/19261807-Aspect-Lab-Web-Design-for-AI-Marketing-Tool'
},
{
  id:4,
  image:IMG4,
  title:'Attorney Website using Divi WordPress',
  github:'https://www.goforthlucas.com/',
  // demo: 'https://dribbble.com/shots/19261807-Aspect-Lab-Web-Design-for-AI-Marketing-Tool'
},
{
  id:5,
  image:IMG5,
  title:'Attorney Website using Divi WordPress',
  github:'https://www.markjobrien.com/',
  // demo: 'https://dribbble.com/shots/19261807-Aspect-Lab-Web-Design-for-AI-Marketing-Tool'
},
// {
//   id:6,
//   image:IMG6,
//   title:'Crypto Currency Dashboard & Financial Visualization',
//   github:'https://github.com',
//   // demo: 'https://dribbble.com/shots/19261807-Aspect-Lab-Web-Design-for-AI-Marketing-Tool'
// }]
]

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Project</h2>

       <div className='container portfolio_container'>
        {
          data.map(({id, image, title, github, demo}) =>
          {
            return(

              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image}  alt={title} />

                </div>
               <h3>
                  {title}
                </h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target='_blank'>Github
                  </a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo
                  </a> */}
                </div>
              </article> 

            )
          })
        }
        
        {/*
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG}  alt='portfolio' />

          </div>
            <h3>
              This is a portfolio item title
            </h3>
            <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn'>Github
            </a>
            <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo
            </a>
            </div>
            </article> */}
            
        {/* </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2}  alt='portfolio' />

          </div>
            <h3>
              This is a portfolio item title
            </h3>
            <div className='portfolio_item-cta'>
              <a href='https://github.com' className='btn'>Github
              </a>
              <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo
              </a>
            </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3}  alt='portfolio' />

          </div>
            <h3>
              This is a portfolio item title
            </h3>
            <div className='portfolio_item-cta'>
              <a href='https://github.com' className='btn'>Github
              </a>
              <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo
              </a>
            </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4}  alt='portfolio' />

          </div>
            <h3>
              This is a portfolio item title
            </h3>
            <div className='portfolio_item-cta'>
              <a href='https://github.com' className='btn'>Github
              </a>
              <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo
              </a>
            </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG5}  alt='portfolio' />

          </div>
            <h3>
              This is a portfolio item title
            </h3>
            <div className='portfolio_item-cta'>
              <a href='https://github.com' className='btn'>Github
              </a>
              <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo
              </a>
            </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6}  alt='portfolio' />

          </div>
            <h3>
              This is a portfolio item title
            </h3>
            <div className='portfolio_item-cta'>
              <a href='https://github.com' className='btn'>Github
              </a>
              <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo
              </a>
            </div>
        </article> */}

      </div>
    </section>
  )
}

export default portfolio