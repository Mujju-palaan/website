import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Karate.json' 
import styles from './acommom.module.css'

const Karate = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default Karate