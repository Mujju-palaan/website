import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/MobileShippingDone.json' 
import styles from './acommom.module.css'

const MobileShippingDone = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default MobileShippingDone