import React from 'react'
import Food from "../../assets/Jollof_rice.png"
import Spoon from "../../assets/Spoon.png"
import Fork from "../../assets/fork.png"
import Knife from "../../assets/Knife.png"
import Crown from "../../assets/crown.png"
import { IoCartOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'

export const slideUp = (delay) => {
    return{
        hidden:{
            y:"100%",
            opacity:0,
        },
        show:{
            y:0,
            opacity:1,
            transition:{
                duration:0.6,
                delay:delay,
            },
        },
    };
}

const Hero = () => {
  return (
    <main className='relative overflow-hidden'>
        <div className="container min-h-100 flex justify-center relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24
            place-items-center justify-between">
                {/*Text Content Here*/}
                <div className="space-y-3 mt-4 text-center md:text-left md:mt-0">
                    <motion.h1 initial="hidden"
                    whileInView="show" variants={slideUp(0.5)} className="relative text-5xl lg:text-7xl 
                    xl:text-8xl font-bold uppercase inline-block text-outline">EKO
                    <img src={Crown} alt="crown" className="absolute w-16 lg:w-24 -top-6.25 right-1.25"/>
                    </motion.h1>
                    <motion.h1 initial="hidden"
                    whileInView="show" variants={slideUp(1)} className="text-2xl lg:text-3xl xl:text-4xl">
                        restaurant & lounge
                    </motion.h1>
                    <motion.p initial="hidden"
                    whileInView="show" variants={slideUp(1.5)} className="text-sm">
                        Experience the rich flavors and vibrant culture of Africa in a refined setting, where every dish, crafted elegantly
                         and every moment, unforgettable.
                    </motion.p>
                    <motion.button initial="hidden"
                    whileInView="show" variants={slideUp(2)} className="btn-primary inline-block mt-3">
                        <IoCartOutline className='inline mr-2'/>
                        Order Now
                    </motion.button>
                </div>
                {/*Image Content Here*/}
                <div className='relative flex justify-center items-center w-[950px] h-[500px]'>
                    <motion.img src={Food} alt="food" 
                    initial={{opacity: 0, rotate: 20, x:200, y:100}}
                    whileInView={{opacity:1, rotate:0, x:0, y:0}} 
                    transition={{duration: 1.0}}
                    className='w-105 img-shadow z-20' />
                    <motion.img src={Spoon} alt="spoon" 
                    initial={{opacity: 0, rotate:20, x:200, y:100}}
                    whileInView={{opacity:1, rotate:0, x:0, y:0}}
                    transition={{duration: 1.0}}
                    className='absolute img-shadow right-0 top-1/2 -translate-y-1/2 h-90 z-40 rotate-[8deg]'/>
                    <motion.img src={Fork} alt="fork" 
                    initial={{opacity:0, rotate:20, x:200, y:100}}
                    whileInView={{opacity:1, rotate:0, x:0, y:0}}
                    transition={{duration: 1.0}}
                    className='absolute left-[70px] img-shadow top-1/2 -translate-y-1/2 h-90 z-30 rotate-[-8deg]'/>
                    <motion.img src={Knife} alt="knife"
                    initial={{opacity:0, rotate:20, x:200, y:100}}
                    whileInView={{opacity:1, rotate:0, x:0, y:0}}
                    transition={{duration: 1.0}}
                    className='absolute right-17.5 img-shadow top-1/2 -translate-y-1/2 h-90 z-30 rotate-6'/>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Hero