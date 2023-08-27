import HealthgoalCard from "@/app/components/AllCards/HealthgoalCard/HealthgoalCard";
import Homepage from "@/app/components/homepage/Homepage";
import Card from "@/app/components/AllCards/Card";
import "./HomePage.css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const HomePage = () => {
  return (
    <>
      <Homepage></Homepage>
      <h2 style={{ textAlign: "center" }}>Achieve Your Health Goals</h2>
      <div style={{ displayL: "flex", padding: "5rem 0 5rem 0" }}>
        <HealthgoalCard></HealthgoalCard>
      </div>
      <h1 style={{ textAlign: "center" }}>Our Programs</h1>


      {/* ********************SLIDERS************************************ */}
      <div className="container">
        {/* <h1 className="heading"></h1> */}
        <Swiper
          style={{overflow:'visible'}}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          watchOverflow={"none"}
          
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            watchOverflow: 'none'
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <Card
              title="Weight Loss Deit Program"
              content={`Our experienced medical professionals put your healing needs first. We are proud to 
          provide a high-quality level of customer service, medical experience, and commitment to 
          health and wellness to all our patients. Our goal is to make you feel better as quickly as possible.`}
              Images="/img1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Weight Gain Deit Program"
              content={`Our experienced medical professionals put your healing needs first. We are proud to 
          provide a high-quality level of customer service, medical experience, and commitment to 
          health and wellness to all our patients. Our goal is to make you feel better as quickly as possible.`}
              Images="/img1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Diabetes Deit Program"
              content={`Our experienced medical professionals put your healing needs first. We are proud to 
          provide a high-quality level of customer service, medical experience, and commitment to 
          health and wellness to all our patients. Our goal is to make you feel better as quickly as possible.`}
              Images="/img1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="PCOD/PCOS Deit Program"
              content={`Our experienced medical professionals put your healing needs first. We are proud to 
          provide a high-quality level of customer service, medical experience, and commitment to 
          health and wellness to all our patients. Our goal is to make you feel better as quickly as possible.`}
              Images="/img1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Cardiovascular Health Improvement Program"
              content={`Our experienced medical professionals put your healing needs first. We are proud to 
          provide a high-quality level of customer service, medical experience, and commitment to 
          health and wellness to all our patients. Our goal is to make you feel better as quickly as possible.`}
              Images="/img1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Pregnancy and Post Pregnancy Deit Program"
              content={`Our experienced medical professionals put your healing needs first. We are proud to 
          provide a high-quality level of customer service, medical experience, and commitment to 
          health and wellness to all our patients. Our goal is to make you feel better as quickly as possible.`}
              Images="/img1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Wedding Deit Program"
              content={`Our experienced medical professionals put your healing needs first. We are proud to 
          provide a high-quality level of customer service, medical experience, and commitment to 
          health and wellness to all our patients. Our goal is to make you feel better as quickly as possible.`}
              Images="/img1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Menopause Deit Program"
              content={`Our experienced medical professionals put your healing needs first. We are proud to 
          provide a high-quality level of customer service, medical experience, and commitment to 
          health and wellness to all our patients. Our goal is to make you feel better as quickly as possible.`}
              Images="/img1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Kids Nutrition Program"
              content={`Our experienced medical professionals put your healing needs first. We are proud to 
          provide a high-quality level of customer service, medical experience, and commitment to 
          health and wellness to all our patients. Our goal is to make you feel better as quickly as possible.`}
              Images="/img1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Fast Fit Plan"
              content={`Our experienced medical professionals put your healing needs first. We are proud to 
          provide a high-quality level of customer service, medical experience, and commitment to 
          health and wellness to all our patients. Our goal is to make you feel better as quickly as possible.`}
              Images="/img1.jpg"
            />
          </SwiperSlide>

          <div className="slider-controler" style={{paddingTop:"0"}}>
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

      {/* ********************SLIDERS************************************ */}
    </>
  );
};

export default HomePage;
