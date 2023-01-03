import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/kajal-singh-b79286164/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/kajal4497/" target="_blank"><FaGithub/></a>
        <a href="https://dribble.com" target="_blank"><FiDribbble/></a>
   </div>
  )
}

export default HeaderSocials