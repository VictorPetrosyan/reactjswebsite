import React from "react";
import phone from "../assets/img/phone.png"

function Learning() {

    return (
        <section id="about"  className="sm:flex-row flex flex-col md:pr-44 px-6 md:pl-10 gap-10 pt-20">
            <div ><img className="bg-cover" src={phone} /></div>
            <div className="flex-1 flex-col flex justify-center gap-10">
                <div className="font font-extrabold text-white text-[47px] sm:text-[55px]">
                Apply AI, Deep Learning and Data Sciece to solve
                </div>
                <div className="font-semibold text-white text-lg opacity-70">
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </div>
                <div>
                <button className="bg-btn-color text-white rounded p-3">Learn More</button>
                </div>
            </div>
            
        </section>
    )
}


export default Learning