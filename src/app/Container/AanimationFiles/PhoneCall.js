import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/PhoneCall.json' 
import styles from './acommom.module.css'

const PhoneCall = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default PhoneCall