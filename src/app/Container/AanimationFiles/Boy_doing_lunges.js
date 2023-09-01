import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Boy_doing_lunges.json' 
import styles from './acommom.module.css'

const Boy_doing_lunges = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default Boy_doing_lunges