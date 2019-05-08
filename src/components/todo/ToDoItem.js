import React from "react";

const ToDoItem = props => (
  <label className="todo__item">
    <input type="checkbox" checked={props.data.completed} />
    {props.data.text}
  </label>
);

export default ToDoItem;
