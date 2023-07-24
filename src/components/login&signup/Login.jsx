import React, { useState } from "react";
import "./Login.css";
import MyButton from "../button/MyButton.jsx";
import { useNavigate } from "react-router-dom";
import { customPost } from "../../utilities/custom-fetch";

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (name && password) {
      let obj = {
        name: name,
        password: password,
      };
      customPost(`/user/login`, obj).then((response) => {
        if (response.result === true) {
          // setting info in local-storage to have global access

          sessionStorage.setItem("email", response.user.email);
          sessionStorage.setItem("username", response.user.name);
          sessionStorage.setItem("token", response.token);
          // just to navigate user to post page after successful login
          navigate("/task-manager");
        } else {
          alert("Invalid");
        }
        setName("");
        setPassword("");
      });
    } else {
      alert("Required username and password");
    }
  }
  return (
    <div>
      <form className="login">
        <div className="input">
          <div>Name</div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input">
          <div>Password</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input" onClick={login}>
          <MyButton lable="LOGIN" />
        </div>
      </form>
    </div>
  );
}
