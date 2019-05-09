import React, { Component } from "react";

export default class TestApp extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <span>
        You are currently logged {this.state.isLoggedIn ? "in" : "out"}
      </span>
    );
  }
}
