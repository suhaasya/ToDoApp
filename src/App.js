import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState({
    title: "",
    completed: false,
  });

  function onChange(e) {
    setTodoItem((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setTodoList((prev) => [todoItem, ...prev]);
    setTodoItem({
      title: "",
      completed: false,
    });
    toast.success("Added item successfully");
  }

  return (
    <div className="App">
      <ToastContainer />
      <TodoInput
        todoItem={todoItem.title}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <div className="output-box">
        {todoList.map((item, i) => (
          <TodoItem
            key={i}
            item={item}
            id={i}
            setTodoList={setTodoList}
            setTodoItem={setTodoItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
