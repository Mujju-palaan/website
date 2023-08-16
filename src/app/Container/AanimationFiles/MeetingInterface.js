import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/MeetingInterface.json' 
import styles from './acommom.module.css'

const MeetingInterface = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default MeetingInterface