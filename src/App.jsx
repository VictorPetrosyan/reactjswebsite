import React from "react"

import styles from "./style"
import Navbar from "./components/Navbar"
import HeroArea from "./components/HeroArea"
import Learning from "./components/Learning"
import Feature from "./components/Feature"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {


  return (
    <div className="bg-blue w-full overflow-hidden" >
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
        <div className={`bg-blue ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <HeroArea />
          </div>
        </div>
        <div className={`bg-blue ${styles.flexStart} ${styles.paddingY}`}>
          <div className={`${styles.boxWidth}`}>
            <Learning />
          </div>
        </div>
        <div className={`${styles.padding} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Feature />
            <About />
          </div>
        </div>
        <div className={`${styles.padding} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      
    </div>
  )
}

export default App
