import homestyle from '@/app/components/homepage/homepage.module.css'
import Herosection from '@/app/components/Herosection'

const Homepage = () => {
  return (
    <>
    <div className={homestyle.main}>
        <div style={{backgroundImage '/nutritionist.png'}}>
            <h2>Mujju</h2>
        </div>
    </div>
    </>
  )
}

export default Homepage