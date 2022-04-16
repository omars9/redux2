import React from "react";
import { useDispatch } from "react-redux";
import { COMP, del } from "../redux/Action";
import EditTask from "./EditTask";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className={task.isDone ? "isdone" : ""}> {task.action} </h2>
      <button onClick={() => dispatch(del(task.id))}>Delete</button>
      <button onClick={() => dispatch(COMP(task.id))}>Complete</button>
      <EditTask task={task} />
    </div>
  );
};

export default Task;
