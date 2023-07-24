import React from "react";
import "./Tasks.css";
// import MyButton from "../button/MyButton";

export default function ViewTasks({ close, item }) {
  return (
    <div className="tasks">
      <div className="add-tasks">
        <form className="task-form">
          <div className="close" onClick={() => close()}>
            Close
          </div>
          <div className="input">
            <div className="title1">Title:</div>
            <div>{item[0].title}</div>
          </div>
          <div className="description1">
            <div className="title1">Description:</div>
            <div>{item[0].description}</div>
          </div>
          <div className="input">
            <div className="title1">Due Date:</div>
            {new Date(item[0].dueDate).toLocaleDateString()}
          </div>
          <div className="input">
            <div className="title1">Status:</div>
            {item[0].status}
          </div>
          {/* <div className="input" onClick={editTask}>
            <MyButton lable="EDIT" />
          </div> */}
        </form>
      </div>
    </div>
  );
}
