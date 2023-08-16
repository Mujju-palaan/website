import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/MulipleSearch.json' 
import styles from './acommom.module.css'

const MulipleSearch = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default MulipleSearch