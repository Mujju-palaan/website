import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Boy_uptodown_exercise.json' 
import styles from './acommom.module.css'

const Boy_uptodown_exercise = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default Boy_uptodown_exercise