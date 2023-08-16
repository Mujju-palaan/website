import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/WomenYoga.json' 
import styles from './acommom.module.css'

const WomenYoga = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default WomenYoga