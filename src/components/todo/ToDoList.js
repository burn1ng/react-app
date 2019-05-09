import React, { Component } from "react";
import "./to_do_list.css";
import ToDoItem from "./ToDoItem";
import todos_data from "./todos_data";

// const ToDoList = () => (
//   <div className="todo__list">
//     {todos_data.map(todo => (
//       <ToDoItem key={todo.id} data={todo} />
//     ))}
//   </div>
// );

export default class ToDoList extends Component {
  constructor() {
    super();

    this.state = {
      todos: todos_data
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }

          return todo;
        })
      };
    });
  }

  render() {
    return (
      <div className="todo__list">
        {this.state.todos.map(todo => (
          <ToDoItem
            key={todo.id}
            data={todo}
            handleChange={this.handleChange}
          />
        ))}
      </div>
    );
  }
}
