import React from "react";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function TodoItem({ item, id, setTodoList, setTodoItem }) {
  function onClick() {
    setTodoList((prev) =>
      prev.map((item, index) => {
        if (id === index) {
          return { ...item, completed: !item.completed };
        }
      })
    );
    item.completed ? toast.error("oh no") : toast.success("Awesome work");
  }

  function onDelete() {
    setTodoList((prev) => prev.filter((item, i) => i !== id));
    toast.success("Deleted item successfully");
  }

  return (
    <div className="todo-item-box">
      {item.completed && <TiTick style={{ fill: "#1aa260" }} />}
      <p className={item.completed ? "todo-item strike" : "todo-item"}>
        {item.title}
      </p>
      <div onClick={onClick} className="crossBtn">
        <ImCross />
      </div>
      <div onClick={onDelete}>
        <FaTrash style={{ fill: "#de5246" }} />
      </div>
    </div>
  );
}
