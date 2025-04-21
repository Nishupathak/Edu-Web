/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "/src/css/component/navbarPhone.css";
import imgL from "../images/logolearnify.png";
import { Link } from "react-router-dom";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import CancelIcon from "@mui/icons-material/Cancel";

export const NavBarPhoneVersion = () => {
  const [sideBar, setSideBar] = useState(true);

  return (
    <div className="navBarPhoneWrapper" style={{zIndex:'5'}}>
      <img className="navPhonoLogo" src={imgL} />
      <div
        className="sideStickWrapper"
        onClick={() => {
          setSideBar((prev) => {
            return !prev;
          });
        }}
      >
        {sideBar ? (
          <ViewWeekIcon className="sideStick" />
        ) : (
          <CancelIcon className="sideStick" />
        )}
      </div>
      <div className={sideBar ? "sideBarPhone" : "sideBarPhone active2"}>
        <Link
          className={sideBar ? "navPhoneLink" : "navPhoneLink activeBar"}
          to="/bookfinder"
        >
          Find Book
        </Link>
        <Link
          className={sideBar ? "navPhoneLink" : "navPhoneLink activeBar"}
          to="/"
        >
          Write Us
        </Link>
        <Link
          className={sideBar ? "navPhoneLink" : "navPhoneLink activeBar"}
          to="/"
        >
          ChatGPT
        </Link>
        <Link
          className={sideBar ? "navPhoneLink" : "navPhoneLink activeBar"}
          to="/"
        >
          Admin
        </Link>
      </div>
    </div>
  );
};
