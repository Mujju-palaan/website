"use client"
import HomePage from '../Container/HomePage/HomePage.js'
import { Button } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <HomePage/>
      <h1> Click her
      <Button href="/pricing">PricingPage</Button>
      </h1>
      <br></br><br/>
      <h1> Click her
      <Button href="/animation">AminationPage</Button>
      </h1>
    </>
  )
}

export default Home