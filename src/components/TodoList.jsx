import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TodoList = () => {
  const { todos, filter } = useSelector((state) => state);
  return (
    <div>
      {!filter ? (
        <>
          {todos.map((el) => (
            <Task task={el} key={el.id} />
          ))}
        </>
      ) : (
        <>
          {todos
            .filter((task) => !task.isDone)
            .map((el) => (
              <Task task={el} key={el.id} />
            ))}
        </>
      )}
    </div>
  );
};

export default TodoList;
