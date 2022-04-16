import logo from "./logo.svg";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import TodoList from "./components/TodoList";
import Addtask from "./components/AddTask";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Addtask />
      <TodoList />
    </div>
  );
}

export default App;
