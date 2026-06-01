import React from 'react'
import Logo from "../../assets/eko_logo.svg"
import {IoCartOutline} from "react-icons/io5"
import {motion } from "framer-motion"

const navMenu = [
    {
        id:1,
        title:"Home",
        path:"/",
        delay: 0.1
    },
    {
        id:2,
        title:"About",
        path:"/about",
        delay: 0.2
    },
    {
        id:3,
        title: "Menu",
        path: "/menu",
        delay: 0.3
    },
    {
        id:4,
        title: "Delivery",
        path: "/delivery",
        delay: 0.4
    },
    {
        id:5,
        title: "Contact Us",
        path: "/contact",
        delay: 0.5
    }
]

const slideDown = (delay) => {
    return{
        initial: {
            y:"-100%",
            opacity:0
        },
        animate: {
            y:0,
            opacity:1,
            transition: {
                duration: 0.6,
                delay: delay
            }
        }

    }
}
const Navbar = () => {
  return (
    <nav className='w-full overflow-x-hidden'>
        <div className="container flex flex-wrap justify-between items-center font-leagueGothic px-0">
            {/*logo section*/}
            <motion.img
            initial ={{opacity:0}} 
            animate={{opacity:1}}
            transition={{duration:0.8, delay:0.5}}
            src={Logo} alt="logo" className='w-36'/>

            {/*menu section*/}
            <div className='flex-1 flex justify-center'>
                <ul className='flex flex-wrap justify-center gap-3 md:gap-6'>
                    {navMenu.map((menu) => {
                        return (
                            <motion.li 
                            variants={slideDown(menu.delay)} 
                            initial="initial" animate="animate" 
                            key={menu.id} className='navmenu' data-delay={menu.delay}>
                                <a href={menu.path} className="inline-block px-1 md:px-2 py-2 text-sm sm:text-base md:text-2xl">
                                    {menu.title}
                                </a>
                            </motion.li>
                        )
                    })}

                </ul>
            </div>

            {/*button section*/}
            <motion.div variants={slideDown(1)} initial="initial" animate="animate">
                <button className="h-10 w-10 grid place-items-center rounded-full bg-dark text-white">
                    <IoCartOutline/>
                </button>
            </motion.div>
            </div></nav>
  )
}

export default Navbar