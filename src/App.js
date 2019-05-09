import React, { Component } from "react";
import MyInfo from "./components/MyInfo";
import ToDoList from "./components/todo/ToDoList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactCardsList from "./components/contacts_list/ContactCardsList";
import JokesList from "./components/jokes_list/JokesList";
import ProductsList from "./components/products/ProductsList";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
// import TestChild from "./components/TestChild";

export default class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   name: "Andrewww",
    //   age: 26,
    //   answer: "Yes"
    // };
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(prevState) {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <Header username="Andrei" />
        <Greeting />
        {/* <h1>{this.state.name}</h1>
        <h3>
          <font color="#3AC1EF">▍{this.state.age} years old</font>
        </h3> */}
        <img
          alt="Bill Murray"
          onMouseOver={() => console.log("Hovered!")}
          src="https://www.fillmurray.com/200/100"
        />
        <button onClick={() => console.log("I was clicked!")}>Click me</button>
        {/* <h1>Is state important to know? {this.state.answer}</h1> */}
        {/* <TestChild testAnswer={this.state.answer} /> */}
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
        <MyInfo state={this.state} />
        <ToDoList />
        <ContactCardsList />
        <JokesList />
        <ProductsList />
        <Footer />
      </>
    );
  }
}
