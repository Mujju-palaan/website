import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/WomenWithVR.json' 
import styles from './acommom.module.css'

const WomenWithVR
= () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default WomenWithVR
