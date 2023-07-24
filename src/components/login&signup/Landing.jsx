import React, { useState } from "react";
import "./Landing.css";
import Login from "./Login";
import Signup from "./Signup";

function Index() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="container">
      <div className="div div1">
        <div className="login-signup">{toggle ? <Login /> : <Signup />}</div>
        <a onClick={() => setToggle(!toggle)}>
          {toggle
            ? "Don't have an accout Click hear to signup"
            : "Have an account Click hear to login"}
        </a>
      </div>
      <div className="div div2">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
    </div>
  );
}

export default Index;
