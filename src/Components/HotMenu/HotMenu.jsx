import React from 'react'
import jollof from "../../assets/jollof_rice.png"
import egusi  from "../../assets/egusi.png"
import ayamase from "../../assets/ayamase.png"
import asun from "../../assets/asun.png"
import pastries from "../../assets/pastries.png"
import { motion } from 'framer-motion'
import {slideUp} from '../Hero/Hero'

const HotMenuData = [
    {
        id:1,
        name:"Jollof Rice",
        img:jollof,
        price:"$21.00",
        delay:0.4,
    },
    {
        id:2,
        name:"Egusi Soup",
        img:egusi,
        price:"$18.00",
        delay:0.8,
    },
    {
        id:3,
        name:"White Rice & Ayamase",
        img:ayamase,
        price:"$25.00",
        delay:1.2,
    },
    {
        id:4,
        name:"Asun Stew",
        img:asun,
        price:"$22.00",
        delay:1.6,
    },
    {
        id:5,
        name:"Pastries",
        img:pastries,
        price:"$12.00",
        delay:2.0,
    }
];
const HotMenu = () => {
  return (
    <section>
        <div className="container py-12">
            {/*Heading Section*/}
            <motion.h3 variants={slideUp(0)} initial="hidden" whileInView="show"
            className="text-2xl font-semibold uppercase py-8 text-green-900">Our Delicacies</motion.h3>
            {/*grid section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {HotMenuData.map((item)=>{
                    return(
                        <motion.div variants={slideUp(item.delay)}
                        initial="hidden" whileInView="show"
                        key={item.id}
                        className="group bg-white/50 shadow-md 
                        p-3 flex items-center gap-3">
                            <img src={item.img} alt={item.name}
                             className="w-24 rounded-full group-hover:scale-125
                             transition-all duration-700 group-hover:rotate-[50deg] img-shadow"/>
                             <div>
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-xl text-green-800">{item.price}</p>
                             </div>
                        </motion.div>
                    );
                })}
                
            </div>
        </div>
    </section>
  )
}

export default HotMenu;