import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/MsgSent.json' 
import styles from './acommom.module.css'

const MsgSent = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default MsgSent