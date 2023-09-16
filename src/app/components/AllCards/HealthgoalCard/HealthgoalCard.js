import styles from './HealthgoalCard.module.css'
import Link from "next/link";
import { useState } from "react";   

const HealthgoalCard = () => {
    const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
        <div className={styles.main}>
            <div className={styles.content}>
                <p>Stay on Top of Your Wellness</p>
                <h2>Personalized Solutions <br></br> for Everyone</h2>
                <p1>Tailored to Your Unique Needs</p1>
                <div className={styles.btn}>
                <Link href={`/pricing`} onClick={() => setOpenMenu(false)}>
                    <button> Try Now </button>
                </Link>
                    
                </div>    
            </div>
            <div style={{textAlign:'center'}}>
                <img className={styles.img} src='/img4.jpg'></img>
            </div>
        </div>
    </>
  )
}

export default HealthgoalCard