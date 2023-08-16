import img from '@/app/Container/AanimationFiles/assets/CreditCard1.json'
import Lottie from "lottie-react"
import styles from './acommom.module.css'

const CreditCard1 = () => {
    return (
          <Lottie className={styles.size} animationData={img} />
    )
  }
  export default CreditCard1