import React from "react";
import Kits from "../Container/KitsPage/Kits";

const page = () => {
  return (
    <div>
      <Kits
        bannerImage='home_applekit.png'
        title={`Samsung Kit`}
        content={`We provie Air pods, iPad, iwatch`}

        img1="home_applekit.png"
        title1={`Air Pods`}
        img2="home_applekit.png"
        title2={`Apple iPad`}
        img3="home_applekit.png"
        title3={`Apple iwatch`}
      />
    </div>
  );
};

export default page;
