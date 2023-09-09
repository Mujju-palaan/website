"use client"
import homestyle from './Homepage.module.css'
import Link from "next/link";
import { useState } from "react";
// import Carouselbanner from '@/app/components/homepage/Carouselbanner.js'

const Homepage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
    <div>
    {/* ***************** Banner IMG  ******************** */} 
      <div className={homestyle.main}>
          <div className={homestyle.imgsec} style={{ 
              backgroundImage: `url("https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5jm95lgsTsUPz4AkaI3m2H/d19a14d682317b8d5cf6769e1c5dc452/GettyImages-1316646389.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=")`  ,
              backgroundRepeat: 'no-repeat'
            }}>
            <div className={homestyle.conatiner}>            
              <p style={{backgroundColor: 'black', opacity: '70%', color: 'white', width: 'max-content'}}>
                GET STARTED ON THE PATH TO HEALTH   !    
              </p>
              <h2>LIVING YOUR BEST LIFE</h2>
              <div>
               <span> 
               <Link href={`/contactus`} onClick={() => setOpenMenu(false)}>
                  <button style={{opacity: '80%'}}> CONTACT US</button>
                </Link>
                
                </span>
               {/* <span> <button style={{opacity: '80%'}}> Learn More</button> </span> */}
              </div>
            </div>   
          </div>
          
      </div>
    {/* ***************** Banner IMG  ******************** */}
    
 {/* ***********************part1************************ */}
     
      <div className={homestyle.part1}>
        <div className={homestyle.part1_content}>
          <h2>Personalized Wellness for a Healthier You</h2>
          <p>Get Started Quickly</p>
          <button> Try for Free</button>
        </div>

        <div>
          <img src='/img3.png' height={500} width={500}></img>
        </div>

      </div>

{/* ***********************part2************************ */}
      


  
    </div>            
    </>
  )
}

export default Homepage
