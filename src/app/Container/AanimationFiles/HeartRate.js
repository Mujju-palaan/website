import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/HeartRate.json' 
import styles from './acommom.module.css'

const HeartRate = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default HeartRate