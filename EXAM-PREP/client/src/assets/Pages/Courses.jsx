import {useEffect} from 'react'
import Aos from "aos";
import "../../css/pages/courses.css";
import webD from '../images/courses/webD.jpg'
import ml from '../images/courses/machineLearnign.jpg'
import react from '../images/courses/React.jpg'
import { Link } from "react-router-dom";
export default function Courses() {
  const coursesItem = [
    {
      id: 1,
      cName: "Web Development (Mern)",
      AosDelay:'0',
      path:'/webDCourse',
      img: webD,
      data: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            culpa.`,
    },
    {
      id: 2,
      cName: "React.Js",
      AosDelay:'100',
      path:'/reactCourse',
      img: react,
      data: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            culpa.`,
    },
    {
        id:3,
        cName: "Machine Learning",
        AosDelay:'200',
        path:'/machineLearning',
        img: ml,
        data: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
              culpa.`,  
    }
    
];
useEffect(()=>{
    Aos.init()
    Aos.refresh();

  },[])
  return (
    <div className="courses_wrapper">
      <h1 className="courses_heading">Courses We Offer</h1>
      <div className="card_wrapper" >
      {coursesItem.map((card) => {
          return (
            <div key={card.id} style={{padding:'20px',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'10px'}}>
            <div className="card"  data-aos="zoom-in-up" data-aos-delay={card.AosDelay}>
            <img src={card.img} className="courseImg"/>
              <div className="card-content">
                <h2 className="card-title" style={{marginBottom:'15px'}} >{card.cName}</h2>
                <p className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, culpa.
                </p>
                <Link to={card.path} className="button">
                  Get Course
                </Link>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
