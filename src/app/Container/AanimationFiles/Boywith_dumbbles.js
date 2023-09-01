import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Boywith_dumbbles.json' 
import styles from './acommom.module.css'

const Boywith_dumbbles = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default Boywith_dumbbles