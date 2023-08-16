
import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/BotWatchingOurStats.json'
import styles from './acommom.module.css'

const BotWatchingStats = () => {
  return (
    <>
        <div >
            <Lottie className={styles.size} animationData={img} />
        </div>  
    </>
  )
}

export default BotWatchingStats