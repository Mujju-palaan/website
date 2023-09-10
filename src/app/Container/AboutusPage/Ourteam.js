import React from 'react'
import '../../styles/swiper.css'
import { Button } from "react-bootstrap";
import ReactCardSlider from 'react-card-slider-component';
import Profilecorusel from '../../components/AboutUs/Profilecorusel'
import KitsimgCard from '../../components/Kits/KitsimgCard';
import AboutUs from '../../components/AboutUs/AboutUs'
import styles from './AboutusPage.module.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";


import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const Ourteam = () => {
  return (
    <div className={styles.teamcontainer}>
        <h1>Our Health</h1>
        <h1 style={{color:'#609a33'}}>Specialist Team</h1>
        <div className="container">
        <Swiper
          autoplay={{
            delay:1000,
            disableOnInteraction: false,
            onpointerover: stop
          }}
          spaceBetween={20}
          style={{ overflow: "hidden" }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"3"} 
          watchOverflow={"none"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            watchOverflow: "visible",
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          <SwiperSlide>
          <KitsimgCard 
            image=""
            title={`Yoga speciliest`}
            />
          </SwiperSlide>
          <SwiperSlide>
          <KitsimgCard 
            image=""
            title={`Yoga speciliest`}
            />
          </SwiperSlide>
          <SwiperSlide>
          <KitsimgCard 
            image=""
            title={`Yoga speciliest`}
            />
          </SwiperSlide>
          <SwiperSlide>
          <KitsimgCard 
            image=""
            title={`Yoga speciliest`}
            />
          </SwiperSlide>
          

          <div className="slider-controler" style={{ paddingTop: "0" }}>
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default Ourteam



        //   {/* ********************OUR TEAM ************************* */}
        //   <div className={styles.teamcontainer}>
        //   <h1>Our Health</h1>
        //   <h1 style={{color:'#609a33'}}>Specialist Team</h1>
        //   {/* <ReactCardSlider slides={slides}/> */}
        //   <div style={{textAlign:'center', display:'flex', gap:'4rem', justifyContent:'center'}}>
        //     <KitsimgCard 
        //     image=""
        //     title={`Yoga speciliest`}
        //     />
        //     <KitsimgCard 
        //     image=""
        //     title={`Yoga speciliest`}
        //     />
        //     <KitsimgCard 
        //     image=""
        //     title={`Yoga speciliest`}
        //     />
        //   </div>
        // </div>
        // {/* <Profilecorusel/> */}
        // {/* ********************OUR TEAM ************************* */}
