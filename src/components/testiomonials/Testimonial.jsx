import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';



const data = [
  {
    avatar:AVTR1,
    name:'Tina Show',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa natus asperiores accusamus quae tempora in, consequatur numquam aliquid velit, fugiat saepe itaque assumenda? Ducimus delectus quaerat officiis error accusamus!'
  },

  {
    avatar:AVTR2,
    name:'Mina Show',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa natus asperiores accusamus quae tempora in, consequatur numquam aliquid velit, fugiat saepe itaque assumenda? Ducimus delectus quaerat officiis error accusamus!'
  },

  {
    avatar:AVTR3,
    name:'Lina Show',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa natus asperiores accusamus quae tempora in, consequatur numquam aliquid velit, fugiat saepe itaque assumenda? Ducimus delectus quaerat officiis error accusamus!'
  },
  {
    avatar:AVTR4,
    name:'Nina Show',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa natus asperiores accusamus quae tempora in, consequatur numquam aliquid velit, fugiat saepe itaque assumenda? Ducimus delectus quaerat officiis error accusamus!'
  }

]




// const testimonial = () => {
//   return (
//     <section id='testimonials'>
//       <h5>Review from clients</h5>
//       <h2>Testimonials</h2>

//       <Swiper className="container testimonials_container"
//       modules={[Pagination]}
//       spaceBetween={50}
//       slidesPerView={1}
//       pagination={{ clickable: true }}>
//         {
//         data.map(({avatar, name, review},index) => {
//         return(
//           <SwiperSlide key={index} className="testimonial">
//           <div className='client_avatar'>
//             <img src={avatar}/>
//           </div>
//           <h5 className='client_name'>{name}</h5>
//           <small className='client_review'>{review}</small>



//           </SwiperSlide>

//         )
        

//         })
//       }
    

//          <article className='testimonial'>
//           <div className='client_avatar'>
//             <img src={AVTR1} alt="Avatar One" />
//             </div>
//             <h5 className='client_name'>Ernest Achiever</h5>
//             <small className='client_review'>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Delectus ea sapiente ipsam ipsum deserunt optio sunt fugit nobis ex quisquam animi,
//               asperiores culpa quaerat ab? Reprehenderit at error nihil culpa?
//             </small>
//         </article>

//         <article className='testimonial'>
//           <div className='client_avatar'>
//             <img src={AVTR2} alt="Avatar Two" />
//             </div>
//             <h5 className='client_name'>Ernest Achiever</h5>
//             <small className='client_review'>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Delectus ea sapiente ipsam ipsum deserunt optio sunt fugit nobis ex quisquam animi,
//               asperiores culpa quaerat ab? Reprehenderit at error nihil culpa?
//             </small>
//         </article>

//         <article className='testimonial'>
//           <div className='client_avatar'>
//             <img src={AVTR3} alt="Avatar Three" />
//           </div>
//             <h5 className='client_name'>Ernest Achiever</h5>
//             <small className='client_review'>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Delectus ea sapiente ipsam ipsum deserunt optio sunt fugit nobis ex quisquam animi,
//               asperiores culpa quaerat ab? Reprehenderit at error nihil culpa?
//             </small>
//          </article>

//          <article className='testimonial'>
//           <div className='client_avatar'>
//             <img src={AVTR4} alt="Avatar Four" />
//           </div>
//             <h5 className='client_name'>Ernest Achiever</h5>
//             <small className='client_review'>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Delectus ea sapiente ipsam ipsum deserunt optio sunt fugit nobis ex quisquam animi,
//               asperiores culpa quaerat ab? Reprehenderit at error nihil culpa?
//             </small>
//          </article> 

//       </Swiper>
//     </section>
//   )
// }

// export default testimonial