import React from "react";

function ToDoItem(props) {
  return (
    <label className="todo__item">
      <input
        type="checkbox"
        checked={props.data.completed}
        onChange={() => props.handleChange(props.data.id)}
      />
      {props.data.text}
    </label>
  );
}

export default ToDoItem;
// export default class ToDoItem extends React.Component {
//   render() {
//     return (
//       <label className="todo__item">
//         <input
//           type="checkbox"
//           checked={this.props.data.completed}
//           onChange={event => this.props.handleChange(this.props.data.id)}
//         />
//         {this.props.data.text}
//       </label>
//     );
//   }
// }
