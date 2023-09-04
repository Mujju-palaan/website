import React from 'react'
import styles from './Applekit.module.css'

const Applekit = () => {
  return (
    <>
        <div className={styles.flex}>
            <div>
                <h1>Apple kit</h1>
                <img className={styles.applesize} src='./home_applekit.png'></img>
            </div>
            <div>
            <h1>Samsung kit</h1>
            <img className={styles.samsungsize} src='./home_samsungkit2.jpg'></img>
            </div>
        </div>
    </>
  )
}

export default Applekit