import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import feature1 from "../assets/img/features1.png"
import feature2 from "../assets/img/features2.png"
import feature3 from "../assets/img/features3.png"
import feature4 from "../assets/img/features4.png"
import feature5 from "../assets/img/features5.png"

function Feature() {
    const featRef = useRef()
    const [width, setWidth] = useState()
    const [view, setView] = useState()
    const Features = [
        {
            img: feature1,
            title: "Naxly as the Winners in Global Agency Awards",
            subtitle: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups."
        },
        {
            img: feature2,
            title: "Expert Prespective Agency Awards",
            subtitle: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups."
        },
        {
            img: feature3,
            title: "Business Prespective Global Agency Awards",
            subtitle: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups."
        },
        {
            img: feature4,
            title: "Value for Results in Global Agency Awards",
            subtitle: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups."
        },
        {
            img: feature5,
            title: "Global Experience in Agency Awards",
            subtitle: "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups."
        },
    ]

    useEffect(() => {
        setWidth(
            featRef.current.scrollWidth - featRef.current.offsetWidth,
        )
    }, [])



    return (
        <section id="services" className="md:py-16 py-6 pt-20">
            <div className="w-full sm:overflow-hidden sm:p-10 p-2 ">
                <motion.div
                    ref={featRef}
                    className="flex gap-5 justify-center"
                    drag='x'
                    dragConstraints={{
                        right: width,
                        left: -width,
                    }}
                    dragElastic={0.1}
                    onChange={val => translateX(val)}

                >
                    {
                        Features.map((val, i) => {
                            return (
                                <motion.div key={i} onViewportEnter={() => setView(i)} viewport={{ amount: 0.7 }} className="flex flex-col justify-center gap-7 p-10 bg-features rounded text-center items-center sm:min-w-[360px] min-w-[330px]">
                                    <img src={val.img} />
                                    <h1 className="text-white">{val.title}</h1>
                                    <p className="text-white opacity-70">{val.subtitle}</p>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </div>
            <div className="flex justify-center gap-3 py-5">
                <div className={`w-2 h-2 rounded-[100%] bg-white ${view == 0 ? "" : "opacity-30"}`}></div>
                <div className={`w-2 h-2 rounded-[100%] bg-white ${view > 0 && view < 4 ? "" : "opacity-30"}`}></div>
                <div className={`w-2 h-2 rounded-[100%] bg-white ${view == 4 ? "" : "opacity-30"}`}></div>
            </div>
        </section>
    )
}

export default Feature