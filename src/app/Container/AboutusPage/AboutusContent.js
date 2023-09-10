import React from 'react'
import styles from './AboutusPage.module.css'

const AboutusContent = () => {
  return (
    <>
        <div className={styles.maincontent}>
          <h2 className={styles.heading} >What Sets Us Apart: Innovation and Personalization</h2>

          <div style={{textAlign:'left'}}>
          <h2>
            <span className={styles.circle}>1</span>{" "}
            <span className={styles.heading}>
            Personalized Nutrition Plans:
            </span>
          </h2>
          <p>
          Our experts craft plans that align with your health goals, dietary preferences, and lifestyle. 
          Your journey is as unique as you are, and your plan reflects that.
          </p>
          </div>
          <div style={{textAlign:'left'}}>
          <h2>
            <span className={styles.circle}>2</span>{" "}
            <span className={styles.heading}>
            Virtual Workout Sessions:
            </span>
          </h2>
          <p>
          Led by experienced trainers, our virtual workouts cater to every fitness level and interest. 
          We want you to relish staying active.
          </p>
          </div>
          <div style={{textAlign:'left'}}>
          <h2>
            <span className={styles.circle}>3</span>{" "}
            <span className={styles.heading}>
            AI Mental Health Support:
            </span>
          </h2>
          <p>
          Acknowledging the mind-body connection, our AI tools help you manage stress and nurture emotional wellness.
          </p>
          </div>
          <div style={{textAlign:'left'}}>
          <h2>
            <span className={styles.circle}>4</span>{" "}
            <span className={styles.heading}>
            Cutting-edge Health Devices:
            </span>
          </h2>
          <p>
          Stay motivated and monitor your progress with state-of-the-art health gadgets, including recyclable 
          CGMs for glucose monitoring.
          </p>
          </div>
          <div style={{textAlign:'left'}}>
          <h2>
            <span className={styles.circle}>5</span>{" "}
            <span className={styles.heading}>
            Choice of Apple or Samsung Kits:
            </span>
          </h2>
          <p>
          Your wellness tools should match your tech preferences. Choose between Apple or Samsung wellness kits.
          </p>
          </div>

{/* ******** Second heading********** */}

          <h2 className={styles.heading}>**Comprehensive Services for Your Well-being**</h2>
          <div style={{textAlign:'left'}}>
          <h2>
            <span className={styles.circle}>1</span>{" "}
            <span className={styles.heading}>
            Personalized Nutrition Plans:
            </span>
          </h2>
          <p>
          Our experts create plans that make healthy eating enjoyable and effortless.
          </p>
          </div>
          <div style={{textAlign:'left'}}>
          <h2>
            <span className={styles.circle}>2</span>{" "}
            <span className={styles.heading}>
            Grocery Delivery:
            </span>
          </h2>
          <p>
          Get your healthy ingredients delivered to your doorstep, simplifying meal planning.
          </p>
          </div>
          <div style={{textAlign:'left'}}>
          <h2>
            <span className={styles.circle}>3</span>{" "}
            <span className={styles.heading}>
            AI Recipe Ideas:
            </span>
          </h2>
          <p>
          Discover exciting dishes based on your kitchen's contents while adhering to your dietary needs.          </p>
          </div>
          <div style={{textAlign:'left'}}>
          <h2>
            <span className={styles.circle}>4</span>{" "}
            <span className={styles.heading}>
            Virtual Workout Trainer:
            </span>
          </h2>
          <p>
          Access virtual sessions for yoga, cardio, and strength training tailored to your preferences.
          </p>
          </div>
          <div style={{textAlign:'left'}}>
          <h2>
            <span className={styles.circle}>5</span>{" "}
            <span className={styles.heading}>
            AI Mental Health Support:
            </span>
          </h2>
          <p>
          Prioritize emotional health with our AI tools.
          </p>
          </div>
          <div style={{textAlign:'left'}}>
          <h2>
            <span className={styles.circle}>6</span>{" "}
            <span className={styles.heading}>
            Health Tracking Devices:
            </span>
          </h2>
          <p>
          Monitor progress with cutting-edge health devices.
          </p>
          </div>

{/* ******** third heading********** */}
            <div>
               <h2 className={styles.heading}>Our Approach to Reach You</h2>
               <p>We use user-friendly websites and apps, social media campaigns, influencer collaborations, 
                and local business partnerships to reach health-conscious individuals, families, and companies.
                </p>
            </div>
            <div>
               <h2 className={styles.heading}>Our Clear Refund Policy</h2>
               <p>Trust and transparency are paramount. You have two months to evaluate our services, and 
                if we fall short of your expectations, you'll receive a full refund.
                </p>
            </div>
            <h2 className={styles.heading}>**Your Choice of Apple or Samsung**</h2>
            <p>Your preferences matter. Select between an Apple Wellness Kit or a Samsung Wellness Kit.</p>
            <p>At SEHAT Nutrition, we're not just enhancing wellness; we're simplifying it, personalizing it, 
                and making it enjoyable. Join us on this journey toward a healthier, happier you. Your well-being, your way.
            </p>

          

        </div>
    </>
  )
}

export default AboutusContent