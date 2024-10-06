import React, { useState } from "react";
import { motion } from "framer-motion";

import robot from "../assets/img/robot.png"
import GmailIcon from "../assets/img/Gmailicon.png"
import LocIcon from "../assets/img/locIcon.png"
import PhoneIcon from "../assets/img/phoneIcon.png"
import TwitterIcon from "../assets/img/Twitter.png"
import YoutubeIcon from "../assets/img/youtubeIcon.png"
import InstagramIcon from "../assets/img/InstagramIcon.png"
import InIcon from "../assets/img/INIcon.png"
import FacebookIcon from "../assets/img/FacebookIcon.png"
import LanguageIcon from "../assets/img/Lang.png"

function Footer() {


    const Languages = [
        { lang: "English", current: true },
        { lang: "Russian", current: false },
        { lang: "Spain", current: false },
    ]

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, y: "-100%" },
    }

    return (
        <footer id="contact" className="flex flex-wrap flex-col xs:flex-row text-white justify-between gap-5 pt-20">
            <div className="flex flex-col gap-3 ">
                <div>
                    <img src={robot} className="w-[45px]" />
                </div>
                <p className="text-btn-color">Artificial Intelligence</p>
                <p className="opacity-70">Lorem ipsum is placeholder text <br /> commonly used in the graphic, print, and<br /> layouts and visual mockups.</p>
                <div className="flex items-center gap-3"><img src={GmailIcon} /> Company@gmail.com.com</div>
                <div className="flex items-center gap-3"><img src={PhoneIcon} /> Phone: (064) 332-1233</div>
                <div className="flex items-center gap-3"><img src={LocIcon} /> 450 Wall Street, USA, New York</div>
            </div>

            <div className="flex flex-col gap-5 pt-5">
                <h1 className="text-base ">INFORMATION</h1>
                <a href="#" className="opacity-70 text-sm">New Collection</a>
                <a href="#" className="opacity-70 text-sm">About Store</a>
                <a href="#" className="opacity-70 text-sm">Contact Us</a>
                <a href="#" className="opacity-70 text-sm">Latest News</a>
                <a href="#" className="opacity-70 text-sm">Our Sitemap</a>
                <a href="#" className="opacity-70 text-sm">Orders History</a>
            </div>
            <div className="flex flex-col gap-5 pt-5">
                <h1 className="text-base">FOOTER MENU</h1>
                <a href="#" className="opacity-70 text-sm">Instagram profile</a>
                <a href="#" className="opacity-70 text-sm">New Collection</a>
                <a href="#" className="opacity-70 text-sm">Contact Us</a>
                <a href="#" className="opacity-70 text-sm">Latest News</a>
                <a href="#" className="opacity-70 text-sm">Terms & Conditions</a>
                <a href="#" className="opacity-70 text-sm">Purchase Theme</a>
            </div>
            <div className="flex flex-col gap-5 pt-5">
                <h1 className="text-base">USEFUL LINKS</h1>
                <a href="#" className="opacity-70 text-sm">Instagram profile</a>
                <a href="#" className="opacity-70 text-sm">New Collection</a>
                <a href="#" className="opacity-70 text-sm">Contact Us</a>
                <a href="#" className="opacity-70 text-sm">Latest News</a>
                <a href="#" className="opacity-70 text-sm">Terms & Conditions</a>
                <a href="#" className="opacity-70 text-sm">Purchase Theme</a>
            </div>
            <div className="flex flex-col gap-5 pt-5">
                <h1>ABOUT THE STORE</h1>
                <p className="text-sm opacity-70">Lorem ipsum is placeholder text <br /> commonly used in the graphic, print, and <br /> layouts and visual mockups.</p>
                <a href="#" >www.company.com</a>
                <div className="flex gap-3">
                    <img src={FacebookIcon} />
                    <img src={InstagramIcon} />
                    <img src={TwitterIcon} />
                    <img src={InIcon} />
                    <img src={YoutubeIcon} />
                </div>
                <div className="flex items-center">
                    <img src={LanguageIcon} />
                    <select id="countries" className=" text-sm rounded-lg outline-none p-1 bg-blue text-white">
                        {
                            Languages.map(val=>{
                                return (
                                    <option value={val.lang} key={val.lang}>{val.lang}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        </footer>
    )
}


export default Footer