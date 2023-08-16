import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Files.json'
import styles from './acommom.module.css'

const Files = () => {
  return (
    <>
        <div >
            <Lottie className={styles.size} animationData={img} />
        </div>  
    </>
  )
}

export default Files