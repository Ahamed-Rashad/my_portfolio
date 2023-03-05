import React, { useContext } from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import Hgo from '../../img/hgo.PNG';
import Dash from '../../img/dash.PNG';
import Weather from '../../img/weather.PNG';
import CY from '../../img/cy.PNG';
import SP from '../../img/sp.PNG';
import Ecommerce from '../../img/ecommerce.png';
import { themeContext } from "../../Context";

const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio">
        <span style={{color: darkMode?'white': ''}}>Recent Project</span>
        <span>Portfolio</span>

        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
        >
            <SwiperSlide>
                <img src={Hgo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Dash} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={SP} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Weather} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={CY} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio
