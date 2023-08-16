import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/USAflag.json' 
import styles from './acommom.module.css'

const USAflag = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default USAflag