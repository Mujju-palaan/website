"use client"
import Card from "@/app/components/Card/Card"
import MotionCard from "@/app/components/Card/MotionCard/MotionCard"
import PriceItemCard from "@/app/components/Card/PriceItemCard/PriceItemCard"

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
    </>
  )
}

export default ProductPage