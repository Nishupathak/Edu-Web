/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import React, { useLayoutEffect, useRef } from "react";
import "/src/css/pages/GetStarted.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const style = {
  color: "white",
};

export const GetStarted = () => {
  const headingGS = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".GS_heading",
        { opacity: 0, scale: 1 },
        { opacity: 1, scale: 1, duration: 1 }
      );
    },
    { scope: headingGS }
  );
  const handleClick = () => {};
  return (
    <div className="getStartedWrapper">
      <div className="GS_headingWapper" ref={headingGS}>
        {/* <div className="circleWrapper">
        <div className="Circle1"></div>
        <div className="Circle2"></div>
        <div className="Circle3"></div>
        </div> */}
        <h1 className="GS_heading" id="learnify">
          LEARNIFY
        </h1>
      </div>
      <div className="signUp">
        <Link to="/signUp">
          <Button
            variant="contained"
            sx={{ mr: 4, scale: "1.2" }}
            className="outineButton"
            onClick={handleClick}
          >
            SignUp
          </Button>
        </Link>
        <Link to="/signIn">
          <Button
            variant="outlined"
            className="outineButton"
            sx={{ mr: 0, scale: "1.2" }}
          >
            LOGIN
          </Button>
        </Link>
      </div>
      <div className="adminLink">
        <Link to="/adminSignUp">
          <Button
            variant="contained"
            className="outineButton"
            sx={{ mr: 0, scale: "1.2", width: 180 }}
          >
            ADMIN dashboard
          </Button>
        </Link>
      </div>
      {/* <div className="rightPannel">
        <Link to="mailto:tusharkumar2002working@gmail.com" className="GS_Link">
          <EmailIcon style={style} />
        </Link>
        <Link to="https://github.com/tusharranker1" className="GS_Link">
          <GitHubIcon style={style} />
        </Link>
        <Link to="https://www.instagram.com/i.tushar20/" className="GS_Link">
          <InstagramIcon style={style} />
        </Link>
      </div> */}
    </div>
  );
};
