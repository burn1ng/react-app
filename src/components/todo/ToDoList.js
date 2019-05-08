import React from "react";
import "./to_do_list.css";
import ToDoItem from "./ToDoItem";

const ToDoList = () => (
  <div className="todo__list">
    <ToDoItem />
    <ToDoItem />
    <ToDoItem />
    <ToDoItem />
    <ToDoItem />
  </div>
);

export default ToDoList;
