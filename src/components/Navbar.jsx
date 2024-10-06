import { useState } from "react"
import robot from "../assets/img/robot.png"

import { motion } from "framer-motion"

export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    const navigation = [
        { name: 'Home', href: '#home', current: true },
        { name: 'About', href: '#about', current: false },
        { name: 'Services', href: '#services', current: false },
        { name: 'Blog', href: '#blog', current: false },
        { name: 'Contact', href: '#contact', current: false },
    ]
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, y: "-100%" },
      }

    return (
        <nav className="py-5 w-full top-0 left-0 bg-opacity-95  z-[999] fixed bg-blue md:px-44 px-6">
            <div className="justify-between w-full hidden  items-center sm:flex ">

                <div className=" text-btn-color items-center gap-2 flex">
                    <img src={robot} className=" h-[40px]" />
                    Artificial Intelligence
                </div>
                <div>
                    <ul className="flex gap-5">
                        {
                            navigation.map(val => {
                                return <li key={val.name}  className={val.current? "opacity-90 text-white" : "text-white"}><a href={val.href}>{val.name}</a></li>
                            })
                        }
                    </ul>
                </div>
                <div>
                    <button className="text-white bg-btn-color w-[112px] h-[38px] rounded-md">Sign In</button>
                </div>
            </div>
            <div className=" text-white sm:hidden flex justify-between items-center">
                <div>
                <button className="text-white bg-btn-color w-[80px] h-[38px] rounded-md">Sign In</button>

                </div>
                <div>
                    <img src={robot} className="h-[40px]" />
                </div>
                <div className=" text-white" >
                    <button onClick={() => setToggle(!toggle)} className="text-white bg-btn-color w-[70px] h-[38px] rounded-md">{toggle ? "close" : "open"}</button>
                    <motion.div variants={variants} animate={toggle ? "open" : "closed"} className={toggle ? 'flex absolute ml-[-70px] mt-2 p-3 bg-slate-800 shadow-2xl rounded ' : 'hidden'}>
                        <ul className="text-white flex gap-3 flex-col " >
                            {
                                navigation.map((val) => {
                                    return <li key={val.name} className={val.current? "text-white p-1 rounded opacity-80" : "rounded p-1"}><a href={val.href}>{val.name}</a></li>
                                })
                            }
                        </ul>
                    </motion.div>

                </div>
            </div>
        </nav>
    )
}
