import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png';

import { UilInstagram } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilBlogger } from '@iconscout/react-unicons' 

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>ahamedrashad09@gmail.com</span>
            <div className="f-icons">
                <a href="https://github.com/Ahamed-Rashad">
                    <UilGithub color='white' size='3rem'/>
                </a>
                <a href="https://www.linkedin.com/in/-ahamed-rashad-/">
                    <UilLinkedin color='white' size='3rem'/>
                </a>
                <a href="https://twitter.com/_ahamed_rashad_">
                    <UilTwitter color='white' size='3rem'/>
                </a>
                <a href="https://medium.com/@ahamedrashad09">
                    <UilBlogger color='white' size='3rem'/>
                </a>
                <a href="https://www.instagram.com/_ahamed_rashad_/">
                    <UilInstagram color='white' size='3rem'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
