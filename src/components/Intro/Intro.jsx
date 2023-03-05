import React, { useContext } from 'react'
import './Intro.css'
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/DP.png';
import glassesimoji from '../../img/glassesimoji.png';
import Crown from '../../img/crown-removebg-preview.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { UilInstagram } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilBlogger } from '@iconscout/react-unicons' 
import { Link } from "react-scroll";

const Intro = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
                <span>Ahamed Rashad</span>
                <span style={{ color: darkMode ? "white" : "" }}>Software Developer with a strong focus on 
                    producing top-quality results in web development 
                    and design. Skilled in multiple frameworks and 
                    programming languages.</span>
            </div>
            <Link to="contact" smooth={true} spy={true}>
                <button className="button i-button">Hire me</button>
            </Link>
            <div className="i-icons">
                <a href="https://github.com/Ahamed-Rashad">
                    <UilGithub color='#FCA61F' size='5rem'/>
                </a>
                <a href="https://www.linkedin.com/in/-ahamed-rashad-/">
                    <UilLinkedin color='#FCA61F' size='5rem'/>
                </a>
                <a href="https://twitter.com/_ahamed_rashad_">
                    <UilTwitter color='#FCA61F' size='5rem'/>
                </a>
                <a href="https://medium.com/@ahamedrashad09">
                    <UilBlogger color='#FCA61F' size='5rem'/>
                </a>
                <a href="https://www.instagram.com/_ahamed_rashad_/">
                    <UilInstagram color='#FCA61F' size='5rem'/>
                </a>
                
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />

            <div className="floating-div" style={{top: '-14%', left: '68%'}}>
                <FloatingDiv image={Crown} txt1='FrontEnd' txt2='Development'/>
            </div>
            <div className="floating-div" style={{top: '77%', left: '-8%'}}>
                <FloatingDiv image={Crown} txt1='BackEnd' txt2='Development'/>
            </div>
            <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
            <div
            className="blur"
            style={{
                background: "#C1F5FF",
                top: "17rem",
                width: "21rem",
                height: "11rem",
                left: "-9rem",
            }}
            ></div>
        </div>
    </div>
  )
}

export default Intro
