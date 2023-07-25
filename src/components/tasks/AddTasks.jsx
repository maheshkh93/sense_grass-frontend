import React, { useState } from "react";
import "./Tasks.css";
import MyButton from "../button/MyButton";
import { customPost } from "../../utilities/custom-fetch";

export default function AddTasks({ close }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState();

  const createTask = async () => {
    let obj = {
      email: sessionStorage.getItem("email"),
      title: title,
      description: description,
      dueDate: dueDate,
    };
    await customPost(`/task/create`, obj).then((response) => {
      if (response.result === true) {
        alert("Task added, refresh to see the changes");
        setTitle("");
        setDescription("");
        setDueDate();
        close();
        // updateTask(response.task);
      }
    });
  };
  return (
    <div className="tasks">
      <div className="add-tasks">
        <form action="/" className="task-form">
          <div className="close" onClick={close}>
            Close
          </div>
          <div className="input">
            <div>Title</div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="description1">
            <div>Description</div>
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="input">
            <div>Due Date</div>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="input" onClick={createTask}>
            <MyButton lable="ADD" />
          </div>
        </form>
      </div>
    </div>
  );
}
