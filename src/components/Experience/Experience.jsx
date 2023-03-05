import React, { useContext } from 'react'
import './Experience.css'
import { themeContext } from "../../Context";

const Experience = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="experience">
      <span className='design'>I design and code beautifully simple things, and I love what I do</span>
      <div className="achive">
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
            <span style={{color: darkMode?'white':''}}>Years</span>
            <span>Experience</span>
        </div>

        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
            <span style={{color: darkMode?'white':''}}>Completed</span>
            <span>Projects</span>
        </div>
      </div>  
    </div>
  )
}

export default Experience
