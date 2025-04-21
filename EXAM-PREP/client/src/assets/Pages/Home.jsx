/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { NavBarPhoneVersion } from "../components/NavBarPhoneVersion";
import "/src/css/pages/home.css";
import { motion } from "framer-motion";
import { HomeComp } from "../components/HomeComp";
import { Subject } from "../components/Subject";


import { ThemeContext } from "../../App";
import Courses from "./Courses";
import Footer from "../components/Footer";

export const Home = () => {
  const [width, setWidth] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 550) {
      setWidth(true);
    } else {
      setWidth(false);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ transform: "translateX(100%) scale(0.8)", opacity: 0 }}
      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        
        className="HOME"
      >
        <div style={{ position: "relative" }}>
          <svg
            style={{
              position: "absolute",
              left: "0",
            }}
            className="svgAnimate"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#3C79F5 "
              fillOpacity="1"
              d="M0,64L34.3,80C68.6,96,137,128,206,138.7C274.3,149,343,139,411,117.3C480,96,549,64,617,74.7C685.7,85,754,139,823,181.3C891.4,224,960,256,1029,224C1097.1,192,1166,96,1234,69.3C1302.9,43,1371,85,1406,106.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
          {width ? <NavBarPhoneVersion /> : <NavBar />}
        </div>
        <HomeComp />
        <Subject />
        <Courses/>
        <Footer/>
      </div>
    </motion.div>
  );
};
export { ThemeContext };
