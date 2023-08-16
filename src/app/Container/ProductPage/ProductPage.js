"use client"
import Card from "@/app/components/Card/Card"
import PriceItemCard from "@/app/components/Card/PriceItemCard/PriceItemCard"

const ProductPage = () => {
  return (
    <>
      <h1>Product Page</h1>
      <div style={{display: "flex",  flexWrap:'wrap'}}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div style={{display: "flex",  flexWrap:'wrap'}}>
      <PriceItemCard></PriceItemCard>
      <PriceItemCard></PriceItemCard>
      <PriceItemCard></PriceItemCard>
      <PriceItemCard></PriceItemCard>
      <PriceItemCard></PriceItemCard>
      <PriceItemCard></PriceItemCard>
      <PriceItemCard></PriceItemCard>
      </div>
    </>
  )
}

export default ProductPage