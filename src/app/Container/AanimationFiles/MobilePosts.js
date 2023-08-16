import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/MobilePosts.json' 
import styles from './acommom.module.css'

const MobilePosts = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default MobilePosts