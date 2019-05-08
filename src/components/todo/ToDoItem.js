import React from "react";

// const ToDoItem = props => (
//   <label className="todo__item">
//     <input type="checkbox" checked={props.data.completed} />
//     {props.data.text}
//   </label>
// );

export default class ToDoItem extends React.Component {
  render() {
    return (
      <label className="todo__item">
        <input type="checkbox" checked={this.props.data.completed} />
        {this.props.data.text}
      </label>
    );
  }
}
