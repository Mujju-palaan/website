import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Wallet.json' 
import styles from './acommom.module.css'

const Wallet = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default Wallet