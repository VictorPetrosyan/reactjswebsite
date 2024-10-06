import React from "react";
import cosmo from "../assets/img/cosmo.png"
import play from "../assets/img/play.png"
import { motion } from "framer-motion";

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0, 
        opacity: 1
    }
};

const cosmoAnimation = {
    hidden: {
        x: 100, 
        opacity: 0,
    },

    visible: {
        x: 0,
        opacity: 1, 
    }
}

function HeroArea() {


    return (
        <section id="home" className="sm:flex-row flex flex-col md:pl-44 px-6 md:pr-10 gap-10 pt-20">
            <motion.div 
            viewport={{amount: 0.2}}
            variants={textAnimation}
            whileInView="visible"
            initial="hidden"
            transition={{
                duration:0.5,
            }}
            
            className="flex-1 flex-col flex justify-center gap-4 ">
                <div className="text-base text-btn-color font-semibold ">
                    Next genaretion platform
                </div>
                <div className="font font-extrabold text-white text-[47px] sm:text-[55px]">
                    Artificial intelligence & Syber security
                </div>
                <div className="font-semibold text-white text-lg opacity-70">
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </div>
                <div className="flex gap-3 my-2 ">
                    <button className="bg-btn-color text-white rounded p-3">Get Started</button>
                    <button className="bg-btn-color text-white w-auto rounded gap-1 flex items-center p-3" ><img src={play} /> Watch Video</button>
                </div>
            </motion.div>
            <motion.div viewport={{amount: 0.5}} variants={cosmoAnimation} initial="hidden" whileInView="visible"><img className="bg-cover" src={cosmo} /></motion.div>
        </section>
    )
}

export default HeroArea