import HealthgoalCard from '../../components/AllCards/HealthgoalCard/HealthgoalCard'
import Homepage from '../../components/homepage/Homepage'
import "./HomePage.css";
import React from "react";
import KitsCom from '../../components/Kits/KitsCom'
import HomeSlider from './HomeSlider'
import Challenge from './Challenge'

const HomePage = () => {
  return (
    <>
      <Homepage></Homepage>
      <h2 style={{ textAlign: "center" }}>Achieve Your Health Goals</h2>
      <div style={{ padding: "5rem 0 5rem 0" }}>
        <HealthgoalCard></HealthgoalCard>
      </div>
      <div className='Kits' style={{textAlign:'center', justifyContent:'center'}}>
      <KitsCom
      image='home_applekit.png'
      title='Apple Kit' 
      link='pricing'
      />
      <KitsCom 
      image='home_applekit.png'
      title='Samsung Kit'
      link='pricing'
      />
      </div>
      

      <h1 className='h2'>Our Programs</h1>

      {/* ********************SLIDERS************************************ */}
      <HomeSlider />

      {/* ********************SLIDERS************************************ */}

      <Challenge />
      
    </>
  );
};

export default HomePage;
