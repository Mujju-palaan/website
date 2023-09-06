import React from 'react'
import styles from './styles.module.css'

const Plans = (props) => {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.content}>
          <div style={{paddingBottom:'2rem'}}>
            <h2 className={styles.heading}>{props.title1}</h2>      
            <p className={styles.content}>{props.Intro_content}</p>
          </div>

          <div >
            <h2 className={styles.heading} >{props.title3}</h2>
            <p className={styles.content}>{props.Approach_content}</p>
          </div>

          <h2 className={styles.heading}>{props.title4}</h2>

          <div>
          <h2>
            <span className={styles.circle}>1</span>{" "}
            <span className={styles.heading}>{props.subtitle1}</span>
          </h2>
          <p className={styles.content}>{props.subcontent1}</p>
          </div>

          <h2>
            <span className={styles.circle}>2</span>{" "}
            <span className={styles.heading}>{props.subtitle2}</span>
          </h2>
          <p className={styles.content}>{props.subcontent2}</p>

          <h2>
            <span className={styles.circle}>3</span>{" "}
            <span className={styles.heading}>{props.subtitle3}
            
            </span>
          </h2>
          <p className={styles.content}>{props.subcontent3}
          
          </p>

          <h2>
            <span className={styles.circle}>4</span>{" "}
            <span className={styles.heading}>{props.subtitle4}
            
            </span>
          </h2>
          <p className={styles.content}>{props.subcontent4}
          
          </p>

          <h2>
            <span className={styles.circle}>5</span>{" "}
            <span className={styles.heading}>{props.subtitle5}
            
            </span>
          </h2>
          <p className={styles.content}>{props.subcontent5}
          

          </p>

          <h2>
            {/* <span className={styles.circle}>7</span>{" "} */}
            <span className={styles.heading}>{props.whytitle}
              
            </span>
          </h2>
          <p className={styles.content}>{props.whycontent1}
          
          </p>
          <p className={styles.content}>{props.whycontent2}
          
          </p>
          <p className={styles.content}>{props.whycontent3}
          
          </p>

          <h2>
            <span className={styles.heading}>{props.contact}</span>
          </h2>
          <p className={styles.content}>{props.contactcontent}
          
          </p>

          
        </div>
      </div>
    </>
  );
};

export default Plans;




// const Plans = () => {
//   return (
//     <div>
        
//         <div style={{ 
//               backgroundImage: `url(${bannerImg})`
//             }}>
//         </div>
//         <div className={styles.bg}></div>

//         <div>
//           <h2>Transform Your Life with Our Personalized Weight Loss Program</h2>

//           <h2>Introduction:</h2>
//           <p>Welcome to our Weight Loss Program, where we are committed to helping you achieve your 
//             health and wellness goals through tailored and effective weight management strategies. 
//             Our team of dedicated professionals understands that each person's weight loss journey is unique, 
//             and we're here to provide the guidance and support you need. </p>

//           <h2>Our Approach:</h2>
//           <p>At SEHAT , we believe in a holistic approach to weight loss. Our personalized weight loss 
//             program is designed to address your specific needs, preferences, and lifestyle, ensuring that 
//             you reach and maintain your ideal weight in a healthy and sustainable way.</p>

//           <h2>Key Features:</h2>
//             <span>
//               <h2>1. **Personalization:**</h2>
//               <p>Our weight loss plans are crafted to meet your individual goals, body type, and dietary requirements.</p>
//             </span>
//             <span>
//               <h2>2. **Balanced Nutrition:</h2>
//               <p>We emphasize balanced and nutritious eating habits, promoting long-term health and well-being.</p>
//             </span>

//             <span>
//               <h2>3. **Effective Strategies:**</h2>
//               <p>Our program combines scientifically proven techniques, such as calorie control, exercise routines, 
//                 and behavior modification, to ensure successful weight loss.</p>
//             </span>
//             <span>
//               <h2>4. **Motivation and Support:**</h2>
//               <p>We provide continuous guidance, motivation, and support to keep you on track and motivated throughout your journey.</p>
//             </span>
//             <span>
//               <h2>5. **Health Benefits:*</h2>
//               <p>Achieving a healthy weight can lead to improved overall health, reduced risk of chronic diseases, and increased vitality.</p>
//             </span>
            

//         </div>

//     </div>
//   )
// }

// export default Plans