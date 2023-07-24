import React from "react";
import "./Button.css";

export default function MyButton(lable) {
  return (
    <>
      <div className="button">{lable.lable}</div>
    </>
  );
}
