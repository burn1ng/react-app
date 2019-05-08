import React from "react";
import "./to_do_list.css";
import ToDoItem from "./ToDoItem";
import todos_data from "./todos_data";

const ToDoList = () => (
  <div className="todo__list">
    {todos_data.map(todo => (
      <ToDoItem key={todo.id} data={todo} />
    ))}
  </div>
);

export default ToDoList;
