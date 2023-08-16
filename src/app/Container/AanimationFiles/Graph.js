import Lottie from "lottie-react"
import img from '@/app/Container/AanimationFiles/assets/Graph.json' 
import styles from './acommom.module.css'

const Graph = () => {
  return (
        <Lottie className={styles.size} animationData={img} />
  )
}
export default Graph