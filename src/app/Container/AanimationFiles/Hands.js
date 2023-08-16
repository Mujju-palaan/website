import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Hands.json' 
import styles from './acommom.module.css'

const Hands = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default Hands