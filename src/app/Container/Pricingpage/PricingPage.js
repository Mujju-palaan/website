"use client";
import CC from '../../components/pricingpage/CreditCard/CC'
import '../../components/pricingpage/CreditCard/styles/index.css'
import PricingCard from '../../components/AllCards/PricingCard/PricingCard'
import Familypricing from '../../components/AllCards/PricingCard/Familypricing'
import Businesspricing from '../../components/AllCards/PricingCard/Businesspricing'
import PricingForm from '../../components/pricingpage/PricingForm'
import SimpleCard from '../../components/AllCards/SimpleCard/SimpleCard'
import Countrystate from '../../components/pricingpage/CountryForm';
import BillingForm from '../../components/pricingpage/BillingForm';
import styles from '../../components/pricingpage/PricingForm.module.css'

const PricingPage = () => {
  return (
    <>
      <h2 style={{padding:'4rem 0 0 0', textAlign:'center', }}>Yearly Subscription</h2>
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
        <PricingCard 
        title={`Basic Plan`}
        subtitle={`For individual service`}
        price={`365`}
        content1={`Personalized Nutrition`}
        content2={`Virtual Workouts`}
        content3={`AI support`}
        content4={`Progress Tracking`}
        content5={`Apple/Samsung Kit`}
        content6={`.`}
        />
        <Familypricing 
        title={`Family Plan`}
        subtitle={`For family services`}
        price={`1000`}
        content1={`Personalized Nutrition`}
        content2={`Virtual Workouts`}
        content3={`AI support`}
        content4={`Progress Tracking`}
        content5={`Covers 5 family members`}
        content6={`Apple/Samsung Kit each`}
        />
        <Businesspricing 
        title={`Corporate Plan`}
        subtitle={`For business services`}
        price={`5000`}
        content1={`Personalized Nutrition`}
        content2={`Virtual Workouts`}
        content3={`AI support`}
        content4={`Progress Tracking`}
        content5={`Covers up to 50 employees`}
        content6={`Apple/Samsung Kit each`}
        />
      </div>
      {/* <div className={styles.contact_section}>
      <h2>Details</h2>
      <BillingForm />
      </div> */}

      <div style={{textAlign:'center', justifyContent:'center', justifyItems:'center', flexDirection:'column',display:'flex'}}>
      {/* <PricingForm /> */}
      {/* <SimpleCard /> */}
      {/* <Countrystate /> */}
      </div>
      <CC />
    </>
  );
};

export default PricingPage;
