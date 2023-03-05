import React, {useContext} from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import CV from '../Services/RashadCV.pdf';
import { themeContext } from "../../Context";

const Services = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


  return (
    <div className="services">
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>My Valuable</span>
            <span>Services</span>
            <span style={{ color: darkMode ? "white" : "" }}>I'm a software developer building highly performant applications, <br/> that solve real-world problems and provide better users experience.<br/> I build things for web. </span>

            <a href={CV} download>
            <button className="button s-button">Download CV</button>
            </a>
            
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>

        <div className="cards">
            <div style={{left: '14rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'FrontEnd'}
                detail = {"HTML5, CSS3, Javascript, React, Sass, Typescript"}
                />
            </div>
            <div style={{top: '12rem', left: '-4rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'BackEnd'}
                detail = {"ASP.NET, C#, Node js,PHP, Mongo DB, PostgreSQL"}
                />
            </div>
            <div style={{top: '19rem', left: '12rem'}}>
                <Card
                emoji = {Humble}
                heading = {'Design'}
                detail = {"Figma, Photoshop, Adobe Illustrator, Adobe xd"}
                />
            </div>
            <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
            ></div>
        </div>
    </div>
  )
}

export default Services
