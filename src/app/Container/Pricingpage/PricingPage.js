"use client";
import CC from "@/app/components/pricingpage/CreditCard/CC";
import "@/app/components/pricingpage/CreditCard/styles/index.css";
import PricingCard from "@/app/components/AllCards/PricingCard/PricingCard";

const PricingPage = () => {
  return (
    <>
      <h2 style={{padding:'4rem 0 0 0', textAlign:'center', }}>Monthly Plan</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem",
          padding: "6rem 0 4rem 0",
          
        }}
      >
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
      <CC />
    </>
  );
};

export default PricingPage;
