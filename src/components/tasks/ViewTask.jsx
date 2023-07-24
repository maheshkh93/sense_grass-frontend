import React, { useState } from "react";
import "./Tasks.css";
// import MyButton from "../button/MyButton";

export default function ViewTasks({ close, item }) {
  const [title, setTitle] = useState(item[0].title);
  const [description, setDescription] = useState(item[0].description);
  const [dueDate, setDueDate] = useState(
    new Date(item[0].dueDate).toLocaleDateString()
  );
  const [status, setStatus] = useState(item[0].status);

  return (
    <div className="tasks">
      <div className="add-tasks">
        <form action="/" className="task-form">
          <div className="close" onClick={() => close()}>
            Close
          </div>
          <div className="input">
            <div className="title">Title:</div>
            <div>{title}</div>
          </div>
          <div className="description1">
            <div className="title">Description:</div>
            <div>{description}</div>
          </div>
          <div className="input">
            <div className="title">Due Date:</div>
            {dueDate}
          </div>
          <div className="input">
            <div className="title">Status:</div>
            {status}
          </div>
          {/* <div className="input" onClick={editTask}>
            <MyButton lable="EDIT" />
          </div> */}
        </form>
      </div>
    </div>
  );
}
