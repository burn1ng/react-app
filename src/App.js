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
import TestChild from "./components/TestChild";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      answer: "Yes"
    };
  }

  render() {
    return (
      <>
        <Navbar />
        <Header username="Andrei" />
        <Greeting />
        <h1>Is state important to know? {this.state.answer}</h1>
        <TestChild testAnswer={this.state.answer} />
        <MyInfo />
        <ToDoList />
        <ContactCardsList />
        <JokesList />
        <ProductsList />
        <Footer />
      </>
    );
  }
}
