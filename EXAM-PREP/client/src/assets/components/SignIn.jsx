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
import { Button } from "@mui/material";
import useLogin from "../../hooks/useLogin";
import LoadingSpin from "react-loading-spin";
import toast, { Toaster } from "react-hot-toast";

export const SignIn = () => {
  const [password, passwordVisibility] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const {error,loading,loginUser} = useLogin();
  const handleSubmit = async(e) => {
    e.preventDefault();
    await loginUser(data);
    if(error===null && !loading){
      toast.success("Logged In");
      navigate("/home");
    }else{
      console.log('Try')
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
        }}/>
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
        <form onSubmit={handleSubmit}>
          <h1 className="loginHeading">
            LOGIN
            <div style={{ fontSize: "12px", color: "grey", marginTop: "5px" }}>
              unlock the world
            </div>
          </h1>
          <div className="usernameInput">
            <AccountCircleRoundedIcon className="accountIcon" />
            <input
              autoComplete="off"
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
              {loading ? (
                <LoadingSpin
                  primaryColor="white"
                  secondaryColor="rgb(9, 86, 209)"
                  size="20px"
                  width="5px"
                />
              ) : (
                <div>Login</div>
              )}
            </button>
          </div>
          <div style={{ marginTop: "10px" }}> or </div>
          <Link to="/signUp">
            <Button
              variant="contained"
              className="outineButton"
              sx={{
                mt: 1,
                scale: "1",
                height: "35px",
                backgroundColor: "rgb(9, 86, 209)",
                width: "400px",
                borderRadius: "10px",
              }}
            >
              Register
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};
