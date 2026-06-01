import React from 'react'
import jollof from "../../assets/jollof_rice.png"
import egusi  from "../../assets/egusi.png"
import ayamase from "../../assets/ayamase.png"
import asun from "../../assets/asun.png"
import Crown from "../../assets/crown.png"
import { motion } from 'framer-motion'
import {slideUp} from '../Hero/Hero'

const PopularRecipeData = [
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
    
];
const PopularRecipe = () => {
    return (
        <section>
            <div className="container py-24">
                <motion.h3 variants={slideUp(0.5)} initial="hidden" whileInView="show"
                className="relative text-4xl text-center font-leagueGothic
                font-semibold uppercase py-8">
                    {""}
                    Our Popular Recipe
                    <img src={Crown} alt="crown" className="absolute w-12 md:w-16 -top-5 right-[10%]"/>
                    </motion.h3>
                    {/* card section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
                    place-items-center">
                        {PopularRecipeData.map((item)=>{
                            return(
                                <div className="group space-y-3 text-center bg-white/50
                                shadow-xl p-3 rounded-xl">
                                    <img src={item.img} alt="" 
                                    className="w-44 mx-auto img-shadow
                                    group-hover:scale-x-110 group-hover:translate-y-[-50px]
                                    group-hover:translate-x-10 group-hover:rotate-[50deg]
                                    transition-all duration-700"/>
                                    <div>
                                        <button className="btn-primary group-hover:mb-3
                                        opacity-0 group-hover:opacity-100">
                                            Buy Now
                                        </button>
                                        <p className="text-xl font-semibold">
                                            {item.name}
                                        </p>
                                        <p className="text-xl font-bold text-green-900">
                                            {item.price}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            </div>
        </section>
    )
}

export default PopularRecipe