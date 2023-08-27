import React from 'react'
import styles from '@/app/components/AllCards/PriceItemCard/PriceItemCard.module.css'
import {BsThreeDots} from "react-icons/bs";
import { AiFillHeart } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';

const PriceItemCard = () => {
  return (
    <>
    <div className={styles.main}>
      <div className={styles.card}>
        <div style={{textAlign:'right', fontSize:'2rem', color:'rgba(156, 154, 155, 0.8)', paddingRight:'1rem'}}>
          <BsThreeDots></BsThreeDots>
        </div>
        <img style={{borderRadius:'20px', margin:'1rem', marginTop:'0'}}
          src='/img2.jpg' height={220} width={220} ></img>
        <h3>Supplements</h3>
        <p>Boost your health and immunity</p>

        <div className={styles.price}>
          <span >
            $ Price: $ 45.00
          </span>
          <span style={{textAlign:'end', paddingLeft:'3rem'}}>
            <button className={styles.button} style={{textAlign:'end', backgroundColor:'#848484',height:'3.5rem'}}>
              <AiFillHeart style={{textAlign:'right'}}></AiFillHeart>
            </button> 
            
          </span>
        </div>
      </div>
        
    </div>
    </>
  )
}

export default PriceItemCard