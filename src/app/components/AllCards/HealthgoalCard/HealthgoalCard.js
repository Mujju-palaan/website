import styles from '@/app/components/AllCards/HealthgoalCard/HealthgoalCard.module.css'

const HealthgoalCard = () => {
  return (
    <>
        <div className={styles.main}>
            <div className={styles.content}>
                <p>Stay on Top of Your Wellness</p>
                <h2>Personalized Solutions <br></br> for Everyone</h2>
                <p1>Tailored to Your Unique Needs</p1>
                <div className={styles.btn}>
                    <button> Try Now </button>
                </div>    
            </div>
            <div className={styles.img}>
                <img src='/img4.jpg' height={400} width={600}></img>
            </div>
        </div>
    </>
  )
}

export default HealthgoalCard