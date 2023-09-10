"use client"
import React from "react";
import styles from './AboutusPage.module.css'
import Ourteam from './Ourteam'
import AboutusContent from './AboutusContent'

const AboutusPage = () => {

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
        <div className={styles.main}>
        <p>
        Welcome to SEHAT Nutrition, your dedicated partner on the journey to a healthier, happier you. 
        We go beyond being just a wellness platform; we are your unwavering ally, leveraging personalized guidance, 
        cutting-edge technology, and steadfast support to transform your well-being.
        </p>

        <h2 className={styles.heading}>Our Vision: Well-being as a Way of Life</h2>
        <p>
        At SEHAT Nutrition, we envision a world where well-being isn't just a goal it's a way of life. 
        Picture families growing closer and healthier, individuals embracing their uniqueness, and 
        businesses thriving with energized employees. Our vision is to empower everyone to embrace 
        well-being on their own terms.
        </p>

        <h2 className={styles.heading}>Our Commitment: Your Well-being Matters</h2>
        <p>Choosing SEHAT Nutrition means committing to your well-being. We recognize that each person is unique, 
          so we offer tailored solutions for individuals, families, and businesses. We believe in personalization, 
          shared experiences, and harnessing the latest technology to elevate your wellness journey.
        </p>
        </div>

        <Ourteam />
        <AboutusContent />        
      </div>
    </>
  );
};

export default AboutusPage;
