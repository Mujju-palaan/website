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
      <div style={{ displayL: "flex", padding: "5rem 0 5rem 0" }}>
        <HealthgoalCard></HealthgoalCard>
      </div>
      <div style={{ displayL: "flex", padding: "5rem 0 5rem 0",textAlign: "center", justifyContent:'center', justifyItems:'center', 
      display:'flex', gap:'4rem' }}>
      <KitsCom
      image='home_applekit.png'
      title='Apple Kit' 
      link='applekits'
      />
      <KitsCom 
      image='home_applekit.png'
      title='Samsung Kit'
      link='samsungkit'
      />
      </div>
      

      <h1 style={{ textAlign: "center" }}>Our Programs</h1>

      {/* ********************SLIDERS************************************ */}
      <HomeSlider />

      {/* ********************SLIDERS************************************ */}

      <Challenge />
      
    </>
  );
};

export default HomePage;
