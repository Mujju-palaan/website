import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Tutor.json' 
import styles from './acommom.module.css'

const Tutor = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default Tutor