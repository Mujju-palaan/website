"use client"
import AboutUs from '../../components/AboutUs/AboutUs'
import React from "react";
import styles from './AboutusPage.module.css'
import { Button } from "react-bootstrap";
import ReactCardSlider from 'react-card-slider-component';
import Profilecorusel from '../../components/AboutUs/Profilecorusel'
import KitsimgCard from '../../components/Kits/KitsimgCard';

// a slide object contains the image link, title and function/click event for when a user clicks on a card

const AboutusPage = () => {
//   const slides = [
//     {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
//     {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
//     {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
//     {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
//     {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
//     {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
//     {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
// ]
  return (
    <>
      <div className={styles.container}> 
        <div className={styles.flex}>
          <div >
          <img className={styles.size} src='/aboutus_healthcheckup.jpg' />
          </div>
          <div className={styles.content}>
            <h1>Why People need a</h1>
            <h1 style={{color:'#609a33'}}>Health Adviser</h1>

            <p style={{color:'grey'}}>Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
            tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum.</p>

            <button >Join us</button> 
            <button style={{ marginLeft:'2rem'}}>Read more</button>
          </div>
        </div>
        <div style={{textAlign:'center', margin:'4rem', paddingTop:'6rem'}}>
        <h2>Our Mission</h2>
        <p>
          Small and medium businesses should be able to afford high-end
          technology. Ensure that no one is left out <br/>of digitization due to a
          lack of IT skills. Make sure all the tools you need are under one roof
          called Tansy Cloud.  <br/> It will be a continuous process of digitizing more
          and more business processes in order to boost quality and customer
          service.
        </p>
        <p>
          We help community members launch their software careers as part of our
          journey to digitize small and <br/> medium businesses. More on this at
          SEHAT.com
        </p>
        </div>

          {/* ********************OUR TEAM ************************* */}
        <div className={styles.teamcontainer}>
          <h1>Our Health</h1>
          <h1 style={{color:'#609a33'}}>Specialist Team</h1>
          {/* <ReactCardSlider slides={slides}/> */}
          <div style={{textAlign:'center', display:'flex', gap:'4rem', justifyContent:'center'}}>
            <KitsimgCard 
            image=""
            title={`Yoga speciliest`}
            />
            <KitsimgCard 
            image=""
            title={`Yoga speciliest`}
            />
            <KitsimgCard 
            image=""
            title={`Yoga speciliest`}
            />
          </div>
        </div>
        {/* <Profilecorusel/> */}
        {/* ********************OUR TEAM ************************* */}
      </div>
    </>
  );
};

export default AboutusPage;
