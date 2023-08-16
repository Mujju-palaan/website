import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Shipment.json' 
import styles from './acommom.module.css'

const Shipment = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default Shipment