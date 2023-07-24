import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customPost } from "../../utilities/custom-fetch";
import "./Login.css";
import MyButton from "../button/MyButton.jsx";
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from "../../utilities/validator";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

  function addName(e) {
    setName(e.target.value);
    if (nameValidator(e.target.value)) {
      setNameErr(false);
    } else {
      setNameErr(true);
    }
  }
  function addEmail(e) {
    setEmail(e.target.value);
    if (emailValidator(e.target.value)) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
  }
  function addPassword(e) {
    setPassword(e.target.value);
    if (passwordValidator(e.target.value)) {
      setPasswordErr(false);
    } else {
      setPasswordErr(true);
    }
  }

  function signUp() {
    console.log("1");
    if (!nameErr && !emailErr && !passwordErr) {
      let obj = {
        name: name,
        email: email,
        password: password,
      };

      customPost(`/user/signup`, obj).then((response) => {
        if (response.result === true) {
          sessionStorage.setItem("email", response.email);
          sessionStorage.setItem("username", response.name);
          sessionStorage.setItem("token", response.token);
          navigate("/task-manager");
          alert("Your account created successfully");
        } else {
          alert("Already present.");
        }
      });
    } else {
      alert("Fill the form data");
    }
  }

  return (
    <div className="login">
      <form onSubmit={signUp}>
        <div className="input">
          <div>Name</div>
          <input type="text" value={name} onChange={(e) => addName(e)} />
          {nameErr ? <div className="error">*Error</div> : null}
        </div>
        <div className="input">
          <div>Email</div>
          <input type="email" value={email} onChange={(e) => addEmail(e)} />
          {emailErr ? <div className="error">*Error</div> : null}
        </div>
        <div className="input">
          <div>Password</div>
          <input
            type="password"
            value={password}
            onChange={(e) => addPassword(e)}
          />
          {passwordErr ? <div className="error">*Error</div> : null}
        </div>
        <div className="input" onClick={signUp}>
          <MyButton lable="SIGNUP" />
        </div>
      </form>
    </div>
  );
}
