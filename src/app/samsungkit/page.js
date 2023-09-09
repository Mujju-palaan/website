import React from 'react'
import Kits from '../Container/KitsPage/Kits'


const page = () => {
  return (
    <>
      <Kits 
      bannerImage='home_samsungkit.jpg.webp'
      title={`Samsung Kit`}
      content={`We provie Air pods, iPad, iwatch`}

      img1='home_applekit.png'
      title1={`Samsung Buds`}
      img2='home_applekit.png'
      title2={`Samsung Tab`}
      img3='home_applekit.png'
      title3={`Samsung watch`}
      />
    </>
  )
}

export default page