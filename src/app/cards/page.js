import FlipperCard from "../components/AllCards/FlipperCard/FlipperCard";
import MotionCard from "../components/AllCards/MotionCard/MotionCard";
import PricingCard from "../components/AllCards/PricingCard/PricingCard";
import ProductCard from "../components/AllCards/ProductCard/ProductCard";
import ProfileCard from "../components/AllCards/ProfileCard/ProfileCard";
import ReviewCard from "../components/AllCards/ReviewCard/ReviewCard";

const Cards = () => {
  return (
    <>
      <h1>All Cards are redirected her</h1>
      <div style={{display: "flex",  flexWrap:'wrap', justifyContent:'center', alignItems:'center', gap:'2rem'}}>     
        <FlipperCard />
        <ProductCard />
        <ReviewCard />
        <PricingCard/>
        <PricingCard/>
        <PricingCard/>
        <MotionCard/>
        <ProfileCard/>

      </div>
    </>
  );
};

export default Cards;
