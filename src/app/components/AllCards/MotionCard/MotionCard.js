"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import './MotionCard.css'

const MotionCard = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    
    <>
        <div className='App'>
            <motion.div 
            transition={{layout: {duration: 1, type:'spring'}}}
            layout 
            onClick={() => setIsOpen(!isOpen)} 
            className='card'
            style={{borderRadius:'2rem', boxShadow:'0px 10px 30px rgba(0,0,0,0.5)'}}
            >
                <motion.h2 layout='position'>  
                    Framer Motion
                </motion.h2>
                {isOpen && (
                <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="expand">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium harum a iste fugit maiores 
                        necessitatibus ea rerum dolores obcaecati.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eos.</p>
                    <button> Read More</button>
                </motion.div>
                
                )}

            </motion.div>

        </div>
    </>
  )
}

export default MotionCard