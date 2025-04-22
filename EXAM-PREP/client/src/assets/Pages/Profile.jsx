/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "../../css/pages/Profile.css";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Profile({ email }) {
  const navigate = useNavigate();
  const { logout, userData, isAuthentic } = useAuth();
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");

  const handleLogout = async () => {
    await logout();
    navigate("/signIn");
  };
  const items = {
    email: "ram12@gmail.com",
  };
  const handleFetch = async () => {
    try {
      const res1 = await fetch("http://localhost:3000/api/auth/getUser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      });
      const data = await res1.json();
      //console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthentic) {
      setName(userData.username);
      setCollege(userData.collegeName);
    }
    handleFetch();
  }, []);

  const handleUpload = ()=>{

  }

  return (
    <div className="body">
      <div className="profile-card">
        <div className="avatar">
          <img
            src="https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="profile-img"
          />

        </div>
        <div className="salutation">
          <div className="name">{isAuthentic?userData.username:''}</div>
          <div className="designation">{isAuthentic?userData.collegeName:''}</div>
        </div>
        <div className="options">
          <button className="status">
             <EmojiEventsIcon style={{color:'brown'}} />
            <span>Community Head</span>
          </button>
          <button className="edit-profile">
            <ChatIcon style={{color:'rgb(9, 86, 209)'}} />
            <span>Chat</span>
          </button>
          <button className="more" id="more-btn" onClick={handleLogout}>
          <LogoutIcon style={{color:'rgb(9, 86, 209)'}} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
