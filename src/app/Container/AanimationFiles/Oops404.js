import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Oops404.json' 
import styles from './acommom.module.css'

const Oops404 = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default Oops404