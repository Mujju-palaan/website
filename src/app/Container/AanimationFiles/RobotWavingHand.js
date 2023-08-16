import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/RobotWavingHand.json' 
import styles from './acommom.module.css'

const RobotWavingHand = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default RobotWavingHand