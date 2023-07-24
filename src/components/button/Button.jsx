import React from "react";
import "./Button.css";

export default function Button(lable) {
  return (
    <>
      <div className="outline">{lable.lable}</div>
    </>
  );
}
