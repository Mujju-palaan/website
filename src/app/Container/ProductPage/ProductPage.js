"use client"
import Card from "@/app/components/AllCards/Card"
import MotionCard from "@/app/components/AllCards/MotionCard/MotionCard"
import PriceItemCard from "@/app/components/AllCards/PriceItemCard/PriceItemCard"
import FlipperCard from "@/app/components/AllCards/FlipperCard/FlipperCard"

const ProductPage = () => {
  return (
    <>
      <h1>Product Page</h1>
      <div style={{display: "flex",  flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div style={{display: "flex",  flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
      <PriceItemCard></PriceItemCard>
      <PriceItemCard></PriceItemCard>
      <PriceItemCard></PriceItemCard>
      <PriceItemCard></PriceItemCard>
      <PriceItemCard></PriceItemCard>
      <PriceItemCard></PriceItemCard>
      <PriceItemCard></PriceItemCard>
      </div>
      <MotionCard/>
      <MotionCard/>
      <FlipperCard />
    </>
  )
}

export default ProductPage