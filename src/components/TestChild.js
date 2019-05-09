import React, { Component } from "react";

export default class TestChild extends Component {
  render() {
    return <h2>TestChild data: {this.props.testAnswer}</h2>;
  }
}
