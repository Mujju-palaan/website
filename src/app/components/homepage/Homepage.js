import homestyle from '@/app/components/homepage/homepage.module.css'

const Homepage = () => {
  return (
    <>
    <div>
    {/* ***************** Banner IMG  ******************** */}
      <div className={homestyle.main}>
          <div className={homestyle.imgsec} style={{ 
              backgroundImage: `url("https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5jm95lgsTsUPz4AkaI3m2H/d19a14d682317b8d5cf6769e1c5dc452/GettyImages-1316646389.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=")`  ,
              backgroundRepeat: 'no-repeat',
              width: 'auto',
              padding: '14rem'
            }}>
                <div className={homestyle.conatiner}>            
                  <p style={{backgroundColor: 'black', opacity: '70%', color: 'white', width: 'max-content'}}>
                    GET STARTED ON THE PATH TO HEALTH   !    
                  </p>
                  <h2>LIVING YOUR BEST LIFE</h2>
                  <div>
                    <span> <button style={{opacity: '80%'}}> CONTACT US</button> </span>
                    <span> <button style={{opacity: '80%'}}> Learn More</button> </span>
                  </div>
                </div>
                {/* <div  className={homestyle.conatiner}>               
                </div> */}
              
          </div>
      </div>
    {/* ***************** Banner IMG  ******************** */}
  
  
    </div>            
    </>
  )
}

export default Homepage
