/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import "../../css/pages/courseInfo.css";
import webD1 from "../images/courses/webD1.jpg";
import webD2 from "../images/courses/webD2.jpg";
import webD3 from "../images/courses/webD3.jpg";
import ReactD from "../images/courses/React.png";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { message } from "antd";
import { Button } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

export default function ReactJsCourse() {
  const navigate = useNavigate();
  const { userData } = useAuth();
  const makePayment = async () => {
    const body = {
      name: userData.fullName,
      cname: "React.Js",
      email: userData.email,
    };
    const res2 = await fetch("http://localhost:3000/api/auth/buyCourse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res2.json();
    if (res2.status === 201) {
      message.success(data.message);
    } else{
      message.error(data.message);
    }
    if (!data.statusFlag) {
      navigate("/home");
    } else {
      const items = {
        id: 1,
        name: userData.fullName,
        cname: "React.Js",
        email: userData.email,
        price: 10000,
        quantity: 1,
      };
      try {
        const res1 = await fetch(
          "http://localhost:3000/api/auth/create-checkout-session",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify(items),
          }
        );
        const data = await res1.json();
        window.location = data.url;
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="navAdminWrapper">
        <Link className="navAdminLink link1" to="/home">
          <HomeRoundedIcon className="iconsAdmin" />
        </Link>
        <Link className="navAdminLink link2" to="/allsubjects">
          <LocalLibraryRoundedIcon className="iconsAdmin" />
        </Link>
        <Link className="navAdminLink link3" to="/writeus">
          <RateReviewRoundedIcon className="iconsAdmin" />
        </Link>
      </div>
      <div className="CourseWrapper">
        <h1 className="webDHeading">
          You Learn Today & <span className="earnSpan">earn</span> Tomorrow with{" "}
          <div className="nameSpanR">React.Js.</div>
        </h1>
        <div className="imageCollageWrapper">
          <div className="img1"></div>
          <div className="img2"></div>
          <div className="img3">
            <img src={webD1} />
          </div>
          <div className="img4">
            <img src={webD2} />
          </div>
          <div className="img5"></div>
          <div className="img6"></div>
          <div className="img7"></div>
          <div className="img8"></div>
          <div className="img9">
            <img src={webD3} />
          </div>
        </div>
        <a href="#courseDetails" className="goToCourse">
          Course Details
        </a>
        <Link className="BuyCourse">
          <Button
            onClick={makePayment}
            variant="contained"
            className="BuyCourseBtn"
            style={{
              width: 140,
              backgroundColor: "rgb(9, 86, 209)",
              fontWeight: "bold",
            }}
          >
            Buy Course
          </Button>
        </Link>
      </div>
      <div className="course_Details" id="courseDetails">
        <img src={ReactD} className="courseDetailsImg" />
        <div className="roadmapWrapper"></div>
      </div>
      <a href="#" className="buyNowLink">
        Buy <ShoppingBagIcon style={{ marginLeft: 5 }} />
      </a>
    </>
  );
}
