import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/HealthNotes.json' 
import styles from './acommom.module.css'

const HealthNotes = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default HealthNotes