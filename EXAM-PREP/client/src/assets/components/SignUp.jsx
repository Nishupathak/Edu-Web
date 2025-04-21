/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "/src/css/pages/Admin.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import { useState } from "react";
import SchoolIcon from '@mui/icons-material/School';
import pageChangeEffect from "../sounds/pageChange.mp3";
import clickEffect from "../sounds/clickEffect.mp3";
import Person3Icon from '@mui/icons-material/Person3';
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import { ThemeContext } from "../Pages/Home";
import { useContext } from "react";
import useSignUp from "../../hooks/useSignUp";
import LoadingSpin from "react-loading-spin";
import toast, { Toaster } from "react-hot-toast";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

export const SignUp = () => {
  const { loading, error, registerUser } = useSignUp();
  const [password, passwordVisibility] = useState(false);
  const navigate = useNavigate();
  // authorization
  const [e, setError] = useState("");
  const [data, setData] = useState({
    fullName: "",
    collegeName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    //registerUser(data)
    e.preventDefault();
    console.log(data);
    registerUser(data);
    if(error===null){
      toast.success("Registered Succesfully");
      navigate('/signIn')
    }else{
      toast.error(error);
    }
  };

  return (
    <div>
      <Toaster
        toastOptions={{

          // Default options for specific types
          success: {
            duration: 3000,
            style: {
            background: "rgb(212, 250, 194)",
            color: "green",
          },
            theme: {
              primary: "green",
              secondary: "rgb(119, 238, 165)",
            },
          },
          error: {
            duration: 3000,
            style: {
            background: "rgb(255, 168, 168)",
            color: "red",
          },
            theme: {
              primary: "red",
              secondary: "rgb(119, 238, 165)",
            },
          },
        }}
      />
      <div className="navAdminWrapper">
        <Link
          className="navAdminLink link1"
          onClick={() => {
            new Audio(pageChangeEffect).play();
          }}
          to="/home"
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
        <form onSubmit={handleSubmit} autoComplete="off">
          <h1 className="loginHeading2">SIGN UP | Register</h1>
          <div className="usernameInput3">
            <Person3Icon className="accountIcon" />
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={data.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="usernameInput3">
            <SchoolIcon className="accountIcon" />
            <input
              type="text"
              placeholder="College Name"
              name="collegeName"
              value={data.collegeName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="usernameInput2">
            <MarkEmailUnreadIcon className="accountIcon" />
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
            <AccountCircleRoundedIcon className="passwordIcon" />
            <input
              style={{ width: "80%" }}
              type="text"
              placeholder="username"
              name="username"
              value={data.username}
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
              {loading ? (
                <LoadingSpin
                  primaryColor="white"
                  secondaryColor="rgb(9, 86, 209)"
                  size="20px"
                  width="5px"
                />
              ) : (
                <div>Register</div>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
