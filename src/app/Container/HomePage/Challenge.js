import React from 'react'
import Lady_exersice_onball from '../../Container/AanimationFiles/Lady_exersice_onball'
import DietPlan from "../AanimationFiles/DietPlan";

const Challenge = () => {
  return (
    <div>
        <div
        className="bg"
        style={{ backgroundImage: 'url("landing-page-bg.jpg")' }}
      >
        <div className="challenge">
          <h1>Change your life in the next </h1>
          <h1 style={{ color: "green" }}>90 days of Practice</h1>
          <p style={{ color: "grey" }}>
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
            tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum.
          </p>
          <div className="contentbox">
            <div className="contentbox">
              <div style={{margin:'2rem', marginTop:0}}>
                <h2>Personalized Nutrition Plan</h2>
                <div className="imgsettings1"><DietPlan className='dietplansize'></DietPlan></div>
                {/* <p className="text1">
                  Etiam sit amet orci eget eros faucibus tincidunt. Sed
                  fringilla mauris sit amet nibh.
                </p> */}
              </div>
            </div>
            <div className="contentbox">
              <div style={{margin:'2rem', marginTop:0}}>
                <h2>Personalized Exercise Plan</h2>
                <div className="imgsettings"><Lady_exersice_onball ></Lady_exersice_onball></div>
                {/* <p className="text">
                  Etiam sit amet orci eget eros faucibus tincidunt. Sed
                  fringilla mauris sit amet nibh.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Challenge