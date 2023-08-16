import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/YogaPose.json' 
import styles from './acommom.module.css'

const YogaPose = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default YogaPose