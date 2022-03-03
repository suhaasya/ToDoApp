import React from "react";

export default function TodoInput({ todoItem, onChange, onSubmit }) {
  return (
    <div className="input-box">
      <h1 className="app-heading">My to do list</h1>
      <input
        type="text"
        className="input"
        placeholder="Add a task"
        value={todoItem}
        onChange={onChange}
      ></input>
      <button type="submit" className="btn" onClick={onSubmit}>
        Add Task
      </button>
    </div>
  );
}
