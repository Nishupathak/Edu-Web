/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "/src/css/pages/Admin.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import { useState } from "react";
import axios from "axios";
import pageChangeEffect from "../sounds/pageChange.mp3";
import clickEffect from "../sounds/clickEffect.mp3";
// import Password from "antd/es/input/Password";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import { ThemeContext } from "./Home";
import { useContext } from "react";

export const Admin = () => {
  const themeContext = useContext(ThemeContext)
  const [password, passwordVisibility] = useState(false);
  const navigate = useNavigate();
  // authorization
  const [e, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // axios
    //   .post("http://localhost:5173/admin", {
    //     email: data.email,
    //     password: data.password,
    //   })
    //   .then((res) => {
    //     if (res.data === "Success") {
    //       navigate("/");
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div style={{ backgroundColor: themeContext?'rgba(7, 85, 186, 0.119)':'black' }}>
      <div className="navAdminWrapper">
        <Link
          className="navAdminLink link1"
          onClick={() => {
            new Audio(pageChangeEffect).play();
          }}
          to="/"
        >
          <HomeRoundedIcon className="iconsAdmin" />
        </Link>
        <Link
          className="navAdminLink link2"
          onClick={() => {
            new Audio(pageChangeEffect).play();
          }}
          to="/allsubjects"
        >
          <LocalLibraryRoundedIcon className="iconsAdmin" />
        </Link>
        <Link
          className="navAdminLink link3"
          onClick={() => {
            new Audio(pageChangeEffect).play();
          }}
          to="/writeus"
        >
          <RateReviewRoundedIcon className="iconsAdmin" />
        </Link>
      </div>
      <div className="adminWrapper">
        <form onSubmit={handleSubmit}>
          <h1 className="loginHeading">Welcome Back | Educator</h1>
          <div className="usernameInput">
            <AccountCircleRoundedIcon className="accountIcon" />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="usernameInput passwordInput">
            <HttpsRoundedIcon className="passwordIcon" />
            <input
              type={password ? "text" : "password"}
              placeholder="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />
            <div
              className="passwordCheck"
              onClick={() => {
                passwordVisibility((prev) => {
                  return !prev;
                });
              }}
            >
              {password ? (
                <RemoveRedEyeRoundedIcon />
              ) : (
                <VisibilityOffRoundedIcon />
              )}
            </div>
          </div>
          <div className="loginWrapper">
            <button
              type="submit"
              className="submitDetails"
              onClick={() => {
                new Audio(clickEffect).play();
              }}
            >
              LogIn
            </button>
            {/* <Link
              className="newUser"
              to="/admin/registration"
              onClick={() => {
                new Audio(pageChangeEffect).play();
              }}
            >
              New | register
            </Link> */}
          </div>
          {e && <div className="">{e}</div>}
        </form>
      </div>
    </div>
  );
};
