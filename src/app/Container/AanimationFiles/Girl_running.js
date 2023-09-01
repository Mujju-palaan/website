import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Girl_running.json' 
import styles from './acommom.module.css'

const Girl_running = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default Girl_running