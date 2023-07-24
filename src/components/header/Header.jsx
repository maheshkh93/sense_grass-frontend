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
      <div className="div">
        <h2>MY TASK MANAGER</h2>
      </div>

      <div className="div">
        <div className="div name">{username}</div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
