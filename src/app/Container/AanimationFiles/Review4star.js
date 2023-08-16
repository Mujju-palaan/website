import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Review4star.json' 
import styles from './acommom.module.css'

const Review4star = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default Review4star