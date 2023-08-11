import React from 'react'
import styles from '@/app/components/Landing.module.css'

const Landing = () => {
  return (
    <>
        <div className={styles.Landing}>
            <h3>How does NutriFy work?</h3>
            <div>
                <span>
                    <h5>The basics for a new user</h5>
                </span>
                <span>
                As a new user, you can get started with NutriFy without any prior knowledge. 
                Once you've signed up and installed the NutriFy app on your device, you'll have access 
                to personalized diet plans, virtual workout sessions, AI therapy, and more. It's simple 
                and easy!
                </span>
                <button>Learn More</button>
            </div>

        </div>
    </>
  )
}

export default Landing