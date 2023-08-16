import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Message.json'
import styles from './acommom.module.css'

const Message = () => {
  return (
    <>
        <div >
            <Lottie className={styles.size} animationData={img} />
        </div>  
    </>
  )
}

export default Message