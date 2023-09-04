import Lottie from "lottie-react"
// import img from '@/app/Container/AanimationFiles/assets/DietPlan.json' 
import img from './assets/DietPlan.json'

const DietPlan = () => {
  return (
        <Lottie style={{height:400,width:400}} animationData={img} />
  )
}
export default DietPlan