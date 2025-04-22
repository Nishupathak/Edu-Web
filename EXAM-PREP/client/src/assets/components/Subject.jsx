/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from "react";
import "/src/css/component/Subject.css";
import dbms from "../images/Subjects/DBMS.jpg";
import os from "../images/Subjects/os.jpg";
import java from "../images/Subjects/java.jpg";
import cn from "../images/Subjects/cn.jpg";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import { ThemeContext } from "../../App";
import Aos from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../../contexts/AuthContext";

export const Subject = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const themeContext = useContext(ThemeContext);
  const subjectList = [
    {
      id: 1,
      img: dbms,
      subName: "DataBase Management System",
      contentURL:'/home/startlearningDBMS'
    },
    {
      id: 2,
      img: os,
      subName: "Operating System",
      contentURL:'/home/startlearningOS'
    },
    {
      id: 3,
      img: java,
      subName: "Java",
      contentURL:'/home/startlearningJAVA'
    },
    {
      id: 4,
      img: cn,
      subName: "Computer Network",
      contentURL:'/home/startlearningCN'
    },
  ];
  const { isAuthentic, userData } = useAuth();
  return (
    <div className="subjectWrapper">
      {subjectList.map((subject) => {
        return (
          <div
            data-aos="fade-up"
            key={subject.id}
            className="subject"
            style={{
              backgroundColor: themeContext
                ? "rgba(36, 167, 255, 0.134)"
                : "#3C79F5",
            }}
          >
            <div className="subjectImg">
              <img src={subject.img} alt="img" />
            </div>
            <div className="subjectContent">
              <h1>{subject.subName}</h1>
              <ol className="contentInfo">
                <li>Topic-wise Tutorials according to Syllabus</li>
                <li>Lecture available with the Article</li>
                <li>Discussion Ceter related to PYQs and Problem</li>
              </ol>
              <div className="btnWrapper">
                <div className="StartLearning">
                  <Link
                    className={
                      themeContext ? "subjectBtnLink" : "subjectBtnLinkDark"
                    }
                    to={isAuthentic ? subject.contentURL : "/signIn"}
                  >
                    Start Learning
                  </Link>
                </div>
                <div className="PractiseProblems">
                  <Link
                    className={
                      themeContext ? "subjectBtnLink" : "subjectBtnLinkDark"
                    }
                    to={isAuthentic ? "" : "/signIn"}
                  >
                    {" "}
                    Practice Problem
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <Link className="exploreMore" to="/allSubjects">
        explore more subject <KeyboardDoubleArrowRightRoundedIcon />
      </Link>
    </div>
  );
};
