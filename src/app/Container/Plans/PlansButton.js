"use client"
import React from 'react'
import styles from './styles.module.css'
import Plans from '../../components/Plans/Plans'
import Link from "next/link";
import { useState } from "react";

const PlansButton = () => {
    const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
        <div style={{padding:'2rem', textAlign:'center'}}>
            <Link href="/WeightLossPrograms" onClick={() => setOpenMenu(false)}>
                <button style={{backgroundColor:'rgba(128, 205, 255, 0.8)',margin:'1rem'}}>Weight Loss</button>
            </Link>
            <Link href="/WeightGainPrograms" onClick={() => setOpenMenu(false)}>
                <button style={{backgroundColor:'rgba(128, 205, 255, 0.8)',margin:'1rem'}}>Weight Gain</button>
            </Link>
            <Link href="/KidsNutrition" onClick={() => setOpenMenu(false)}>
                <button style={{backgroundColor:'rgba(128, 205, 255, 0.8)',margin:'1rem'}}>Kid's Nutrition</button>
            </Link>
            <Link href="/WeddingDeitProgram" onClick={() => setOpenMenu(false)}>
                <button style={{backgroundColor:'rgba(128, 205, 255, 0.8)',margin:'1rem'}}>Wedding Diet</button>
            </Link>
            <Link href="/PCOD" onClick={() => setOpenMenu(false)}>
                <button style={{backgroundColor:'rgba(128, 205, 255, 0.8)',margin:'1rem'}}>PCOD Diet</button>
            </Link>
            <Link href="/FitnessPerformance" onClick={() => setOpenMenu(false)}>
                <button style={{backgroundColor:'rgba(128, 205, 255, 0.8)',margin:'1rem'}}>Fitness </button>
            </Link>
            <Link href="/DiabetesDeitProgram" onClick={() => setOpenMenu(false)}>
                <button style={{backgroundColor:'rgba(128, 205, 255, 0.8)',margin:'1rem'}}>Diabetes Diet</button>
            </Link>
       
        
        
        
        
        
        
      </div>
    </div>
  )
}

export default PlansButton