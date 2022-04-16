import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add, filt } from "../redux/Action";

const Addtask = ({ add }) => {
  const { filter } = useSelector((state) => state);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      action: text,
      isDone: false,
    };
    dispatch(Add(newTask));
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add</button>
      </form>
      <button onClick={() => dispatch(filt())}>
        {filter ? "All" : "Filter"}
      </button>
    </div>
  );
};

export default Addtask;
