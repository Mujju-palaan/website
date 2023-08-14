import Card from "@/app/components/Card/Card.js"
import PriceItemCard from "@/app/components/Card/PriceItemCard/PriceItemCard"

const Product = () => {
  return (
    <>
      <h1>Product Page</h1>
      <div style={{display: "flex"}}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div style={{display: "flex"}}>
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

export default Product