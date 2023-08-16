import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/LocationIcon.json' 
import styles from './acommom.module.css'

const LocationIcon = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default LocationIcon