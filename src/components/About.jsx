import React from "react";

import Aboutimg from "../assets/img/About.png"  

function About(){

    return (
        <section id="blog" className="flex flex-wrap w-full justify-center md:py-16 py-6 gap-5 pt-20">
            <div className=" flex flex-col text-white flex-1 gap-10 justify-center">
                <h1 className="text-[40px] font-bold ">What our clients say about our awesome solutions</h1>
                <p className="font-semibold text-base opacity-70">To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.</p>
                <p className="font-semibold text-base opacity-70">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</p>
                <p className="font-semibold text-base opacity-70">Lorem ipsum is placeholder previewing layouts and visual mockups.</p>
                <p className="font-semibold text-base opacity-70">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div><img src={Aboutimg} className="bg-cover" /></div>
        </section>
    )
}

export default About