import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import MyButton from "../button/MyButton";
import Button from "../button/Button";
import "./Dashboard.css";
import AddTasks from "../tasks/AddTasks";
import Tasklist from "./Tasklist";
import { customGet } from "../../utilities/custom-fetch";
import ViewTasks from "../tasks/ViewTask.jsx";
import EditTasks from "../tasks/EditTask.jsx";

export default function Dashboard() {
  const [addTask, setAddtask] = useState(false);
  const [viewTask, setViewtask] = useState(false);
  const [viewItem, setViewItem] = useState({});
  const [editTask, setEdittask] = useState(false);
  const [editItem, setEditItem] = useState({});

  const [taskList, setTaskList] = useState([]);

  // const updateTask = (task) => {
  //   setTaskList([taskList.concat(task)]);
  // };

  const refresh = () => {
    let email = sessionStorage.getItem("email");
    customGet(`/task/get-tasks/${email}`).then((response) => {
      response.tasks ? setTaskList(response.tasks) : null;
    });
  };

  useEffect(() => {
    let email = sessionStorage.getItem("email");
    customGet(`/task/get-tasks/${email}`).then((response) => {
      response.tasks ? setTaskList(response.tasks) : null;
    });
  }, []);

  const closeAdd = () => {
    setAddtask(false);
  };

  const openView = (id) => {
    setViewtask(true);
    let obj = taskList.filter((item) => {
      return item._id == id;
    });
    setViewItem(obj);
  };

  const closeView = () => {
    setViewtask(false);
    setViewItem({});
  };
  const openEdit = (id) => {
    setEdittask(true);
    let obj = taskList.filter((item) => {
      return item._id == id;
    });
    setEditItem(obj);
  };
  const closeEdit = () => {
    setEdittask(false);
    setEditItem({});
  };

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <h3 className="refresh" onClick={refresh}>
        REFRESH
      </h3>
      <div className="top-container">
        <div className="sidebar" onClick={() => setAddtask(true)}>
          <Button lable="ADD TASKS" />
        </div>
        <div
          className="filters"
          title="This feature is not available right now"
        >
          <MyButton lable="COMPLETED TASKS" />
          <MyButton lable="PENDING TASKS" />
          <MyButton lable="INCOMPLETED TASKS" />
          <MyButton lable="SORT BY DUE DATE" />
        </div>
      </div>
      <div className="task-container">
        <h2>TASKS LISTS</h2>
        <table className="table">
          <thead className="thead">
            <tr className="headings">
              <th className="title">TITLE</th>
              <th className="description">DESCRIPTION</th>
              <th className="due">DUE DATE</th>
              <th className="date">REMAINING TIME</th>
              <th className="status">STATUS</th>
              <th className="todo">TODO</th>
            </tr>
          </thead>
        </table>
        {taskList.length > 0 ? (
          taskList.map((item) => (
            <Tasklist
              item={item}
              key={item._id}
              openView={openView}
              openEdit={openEdit}
            />
          ))
        ) : (
          <div>Your Task List is empty</div>
        )}
      </div>
      {addTask ? (
        <div className="tasks">
          <AddTasks close={closeAdd} />
        </div>
      ) : null}
      {viewTask && viewItem ? (
        <div className="tasks">
          <ViewTasks close={closeView} item={viewItem} />
        </div>
      ) : null}
      {editTask ? (
        <div className="tasks">
          <EditTasks close={closeEdit} item={editItem} />
        </div>
      ) : null}
    </>
  );
}
