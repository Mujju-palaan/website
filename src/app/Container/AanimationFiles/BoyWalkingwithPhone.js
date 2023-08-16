import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/BoyWalkingwithPhone.json'
import styles from './acommom.module.css'

const BoyWalkingwithPhone = () => {
  return (
    <>
        <div >
            <Lottie className={styles.size} animationData={img} />
        </div>  
    </>
  )
}

export default BoyWalkingwithPhone