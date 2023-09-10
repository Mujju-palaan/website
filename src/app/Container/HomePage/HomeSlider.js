import React from 'react'
import Card from '../../components/AllCards/Card'
import './HomePage.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";


import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const HomeSlider = () => {
  return (
    <div>
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
            <Card
              title="Weight Loss"
              content={`Transform Your Life with Our Personalized Weight Loss Program.`}
              Images="/prog_weightloss.jpg"
              link='WeightLossPrograms'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Weight Gain"
              content={`Achieve Healthy Weight Gain with Our Personalized Program.`}
              Images="/prog_weightgain.jpg"
              link='WeightGainPrograms'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Diabetes"
              content={`Expertly Crafted Diabetes Diet Plans for Optimal Health.`}
              Images="/prog_diabeties.jpg"
              link='DiabetesDeitProgram'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="PCOD/PCOS"
              content={`Empowering Women with Our Comprehensive PCOD/PCOS Management Program.`}
              Images="/prog_pcod.jpg"
              link='PCOD'
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <Card
              title="Cardiovascular Health Improvement Program"
              content={`Our experienced medical professionals put your healing needs first. We are proud to 
          provide a high-quality level of customer service, medical experience, and commitment to 
          health and wellness to all our patients. Our goal is to make you feel better as quickly as possible.`}
              Images="/prog_health.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Pregnancy and Post Pregnancy Deit Program"
              content={`Our experienced medical professionals put your healing needs first. We are proud to 
          provide a high-quality level of customer service, medical experience, and commitment to 
          health and wellness to all our patients. Our goal is to make you feel better as quickly as possible.`}
              Images="/prog_pragnent.jpg"
            />
          </SwiperSlide> */}
          <SwiperSlide>
            <Card
              title="Wedding"
              content={`Achieve Your Dream Wedding Look with Our Specialized Wedding Diet Program.`}
              Images="/prog_wedding.jpg"
              link='WeddingDeitProgram'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Menopause"
              content={`Embrace Menopause with Vitality: Our Personalized Menopause Diet Program.`}
              Images="/prog_monopause.jpg"
              link='MenopauseDeitProgram'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Kids Nutrition"
              content={`Nurturing Healthy Futures: Our Specialized Kids Nutrition Program.`}
              Images="/prog_kidsdiet.jpg"
              link='KidsNutrition'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Fitness Plan"
              content={`Elevate Your Performance with Our Custom Fitness Programs.`}
              Images="/prog_fastfit.jpg"
              link='FitnessPerformance'
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

export default HomeSlider