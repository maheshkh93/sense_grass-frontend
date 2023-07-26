import React, { useState } from "react";
import "./Tasks.css";
import MyButton from "../button/MyButton";
import { customPut } from "../../utilities/custom-fetch";

export default function EditTasks({ close, item }) {
  const [title, setTitle] = useState(item[0].title);
  const [description, setDescription] = useState(item[0].description);
  const [dueDate, setDueDate] = useState(item[0].dueDate);
  const [status, setStatus] = useState(item[0].status);

  const editTask = async () => {
    let obj = {
      userId: sessionStorage.getItem("id"),
      title: title,
      description: description,
      dueDate: dueDate,
      status: status,
    };
    await customPut(`/task/update/${item[0]._id}`, obj).then((response) => {
      if (response.result === true) {
        setTitle("");
        setDescription("");
        setDueDate();
        setStatus("");
        close();
        alert("Successfully updated, Refresh to see the changes");
      }
    });
  };
  return (
    <div className="tasks">
      <div className="add-tasks">
        <form action="/" className="task-form">
          <div className="close" onClick={() => close()}>
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
              value={`${new Date(dueDate).getFullYear()}-0${
                new Date(dueDate).getMonth() + 1
              }-${new Date(dueDate).getDate()}`}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="input">
            <div>Due Date</div>
            <select
              type=""
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="edit-button" onClick={editTask}>
            <MyButton lable="UPDATE" />
          </div>
        </form>
      </div>
    </div>
  );
}
