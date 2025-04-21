/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "/src/css/pages/WriteUs.css";
import emailjs from "@emailjs/browser";
import pageChangeEffect from "../sounds/pageChange.mp3";
import { ThemeContext } from "./Home";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
export const Writeus = () => {
  const theme = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => emailjs.init("J1ke7fOPGxvQKNLdl"), []);
  const navigate = useNavigate();
  const suggestion = [
    { name: "Test is Not Available" },
    { name: "Less Practise Problem" },
    { name: "Video not Playing" },
    { name: "suggestion4" },
    { name: "suggestion5" },
    { name: "suggestion6" },
  ];
  const handleClickSuggestion = (idx) => {
    document.getElementById("textArea").value = suggestion[idx].name;
  };
  // form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_u03p7cu";
    const templateId = "template_suiw7sk";
    try {
      await emailjs.send(serviceId, templateId, {
        email_id: email,
        message: message,
      });
      console.log("sent");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleTextChange = (e) => {
    setMessage(e.target.value);
  };
  
  return (
    <div className={theme ? "writeUsWrapper lightBg" : "writeUsWrapper darkBg"}>
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
      <form className="formContainer" id="writeForm" onSubmit={handleSubmit}>
        <h1 className="writeHeading1">Learnify</h1>
        <h3 className="writeHeading2">- Help Center -</h3>
        <div className="emailSection">
          <input
            type="email"
            placeholder="Enter Email"
            onChange={handleEmailChange}
          />
        </div>
        <div className="textSection">
          <textarea
            type="text"
            rows="10"
            cols="38"
            placeholder="Ask your Query !"
            id="textArea"
            onChange={handleTextChange}
          ></textarea>
        </div>
        <div className="suggestionsWrapper">
          {suggestion.map((s, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  handleClickSuggestion(idx);
                }}
                className="suggestion"
              >
                {s.name}
              </div>
            );
          })}
        </div>
        <button className="writeBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
