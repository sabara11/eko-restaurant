import React from 'react'
import BannerImage from "../../assets/banner.png"
import {slideUp} from "../Hero/Hero"
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <section>
        <div className="container py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
                {/*Image Content Here*/}
                <div className="relative flex justify-center items-center">
                {/* Yellow circle background */}
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute h-[300px] w-[300px] bg-[var(--color-lightYellow)] rounded-full z-0 
                sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]"
                />
                <motion.img initial={{
                        opacity:0,
                        x:-100,
                        y:100,
                }} whileInView={{
                        opacity:1,
                        x:0,
                        y:0,
                }} whileHover={{
                        scale:1.2,
                        rotate:15,
                        x:50,
                        y:-50,
                }} transition={{
                        duration:0.8,
                        delay:0.5,
                        scale:{duration:0.5},

                }}
                src={BannerImage} alt="banner" 
                className="relative z-10 w-[220px] sm:w-[280px] md:w-[320px] lg:w-[350px] img-shadow"/>
                </div>
                {/*Text Content Here*/}
                <div className="space-y-5 lg:max-w-[400px] text-center md:text-left" >
                    <motion.h1 initial="hidden" whileInView="show" variants={slideUp(1)}
                    className="text-4xl md:text-3xl sm:text-2xl uppercase font-semibold font-leagueGothic">
                         African Excellence served in a Dish.
                    </motion.h1>
                    <motion.p variants={slideUp(1.3)} initial="hidden" whileInView="show" className="text-sm">
                        Every plate tells a story of culture, flavor, and tradition. 
                        From the first aroma to the final bite, our dishes are crafted 
                        to deliver an unforgettable memory and wanting more.
                    </motion.p>
                    <motion.button 
                    variants={slideUp(1.6)} initial="hidden" whileInView="show" className="btn-primary">
                        Order Now
                    </motion.button>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Banner