import HealthgoalCard from "@/app/components/Card/HealthgoalCard/HealthgoalCard"
import Homepage from "@/app/components/homepage/Homepage"

const HomePage = () => {
  return (
    <>
      <Homepage></Homepage>
      <h2 style={{textAlign:'center'}}>Achieve Your Health Goals</h2>
      <div style={{displayL:'flex', padding:'5rem 0 5rem 0'}}>
        
        <HealthgoalCard></HealthgoalCard>
      </div>
    </>
  )
}

export default HomePage