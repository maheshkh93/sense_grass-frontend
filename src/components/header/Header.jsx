import React, { useState, useEffect } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username) {
      setUsername(username);
    } else {
      navigate("/");
    }
  }, []);

  function logout() {
    sessionStorage.clear();
    navigate("/login/signup");
  }

  return (
    <div className="main">
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>
      <div className="bubble bubble4"></div>
      <div className="bubble bubble5"></div>
      <div className="bubble bubble6"></div>
      <div className="division">
        <h2>MY TASK MANAGER</h2>
      </div>
      <div className="division name">
        <h3>{username}</h3>
        <h4 onClick={logout}>Logout</h4>
      </div>
    </div>
  );
}
