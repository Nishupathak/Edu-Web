/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "/src/css/pages/Registration.css";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import axios from "axios";
import clickEffect from '../sounds/clickEffect.mp3'
import pageChangeEffect from '../sounds/pageChange.mp3'

export const Registration = () => {
  const [fname, setFName] = useState(false);
  const [lname, setLName] = useState(false);
  const [pass1, setPass1] = useState("");
  const [passVisi1, setPassVisi1] = useState(false);
  const [passVisi2, setPassVisi2] = useState(false);

  const [borderPass, setPassColor] = useState("1px solid rgba(0, 0, 0, 0.33)");

  const enterPassword1 = (password) => {
    setPass1(password);
  };
  const enterPassword2 = (password) => {
    if (pass1 === password) {
      setPassColor("2px solid #A8DF8E");
    } else if (password.length > 0 && pass1 != password) {
      setPassColor("2px solid #FE0000");
    } else {
      setPassColor("1px solid rgba(0, 0, 0, 0.33)");
    }
    setData({ ...data, password: password });
  };

  // Registration Logic
  const navigate = useNavigate();
  const [e, setError] = useState("");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    axios.post('http://localhost:5173/register',{firstName:data.firstName,lastName:data.lastName,email:data.email,password:data.password})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  };

  return (
    <div className="registrationWrapper">
      <form onSubmit={handleSubmit}>
        <h1 style={{ color: "rgb(9, 86, 209)" }}>Registration</h1>
        <div className="nameWrapper">
          <div className="firstName">
            <span style={{ fontSize: fname ? "14px" : "14px" }}>
              First Name
            </span>
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              required
              onChange={handleChange}
            />
          </div>
          <div className="lastName">
            <span style={{ fontSize: lname ? "14px" : "14px" }}>Last Name</span>
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="emailWrapper">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={data.email}
            required
            onChange={handleChange}
          />
        </div>
        <div className="passwordWrapper">
          <span className="spanP">Password</span>
          <input
            type={passVisi1 ? "text" : "password"}
            onChange={(e) => {
              enterPassword1(e.target.value);
            }}
          />
          <div
            className="showIcon"
            onClick={() => {
              setPassVisi1((p) => {
                return !p;
              });
            }}
          >
            {passVisi1 ? (
              <RemoveRedEyeRoundedIcon />
            ) : (
              <VisibilityOffRoundedIcon />
            )}
          </div>
        </div>
        <div className="passwordWrapper">
          <span className="spanRp">Re-Enter Password</span>
          <input
            type={passVisi2 ? "text" : "password"}
            style={{ border: borderPass }}
            name="password"
            value={data.password}
            required
            onChange={(e) => {
              enterPassword2(e.target.value);
            }}
          />
          <div
            className="showIcon"
            onClick={() => {
              setPassVisi2((p) => {
                return !p;
              });
            }}
          >
            {passVisi2 ? (
              <RemoveRedEyeRoundedIcon />
            ) : (
              <VisibilityOffRoundedIcon />
            )}
          </div>
        </div>
        {e && <div className="">{e}</div>}
        <button type="submit" className="registerBtn" onClick={()=>{new Audio(clickEffect).play()}}>
          Register
        </button>
        <button type="submit" className="registerBtn" style={{backgroundColor:'white',border:'2px solid blue',color:'black',padding:'8px 20px'}} onClick={()=>{new Audio(pageChangeEffect).play()
          navigate('/')
        }}>
          Home
        </button>
      </form>
    </div>
  );
};
