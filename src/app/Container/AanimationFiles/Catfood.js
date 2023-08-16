import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Catfood.json'
import styles from './acommom.module.css'

const Catfood = () => {
  return (
    <>
        <div >
            <Lottie className={styles.size} animationData={img} />
        </div>  
    </>
  )
}

export default Catfood