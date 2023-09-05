import React from 'react'
import styles from './styles.module.css'
import bannerImg from '../../../../public/Plans_PCODBanner.jpeg'

const Plans = () => {
  return (
    <div>
        
        <div style={{ 
              backgroundImage: `url(${bannerImg})`
            }}>
        </div>
        <div className={styles.bg}></div>
        <h2>Mujju</h2>
    </div>
  )
}

export default Plans