import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Sheild.json' 
import styles from './acommom.module.css'

const Sheild = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default Sheild