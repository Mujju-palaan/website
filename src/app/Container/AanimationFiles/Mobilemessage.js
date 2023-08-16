import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Mobilemessage.json' 
import styles from './acommom.module.css'

const Mobilemessage = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default Mobilemessage