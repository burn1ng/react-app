import React from "react";

const MyInfo = props => (
  <>
    <h1>
      Andrei Dushkou <span>{props.state.count}</span>
    </h1>
    <p>Hi! I'm software engineer</p>
    <ol>
      <li>Amsterdam</li>
      <li>Greece</li>
      <li>Ireland</li>
    </ol>
  </>
);

export default MyInfo;
