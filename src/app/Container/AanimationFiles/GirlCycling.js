import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/GirlCycling.json'
import styles from './acommom.module.css'

const GirlCycling = () => {
  return (
    <>
        <div >
            <Lottie className={styles.size} animationData={img} />
        </div>  
    </>
  )
}

export default GirlCycling