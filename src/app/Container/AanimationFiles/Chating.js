
import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Chating.json'
import styles from './acommom.module.css'

const Chating = () => {
  return (
    <>
        <div >
            <Lottie className={styles.size} animationData={img} />
        </div>  
    </>
  )
}

export default Chating