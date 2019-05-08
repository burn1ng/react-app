import React from "react";
import MyInfo from "./components/MyInfo";
import ToDoList from "./components/todo/ToDoList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactCardsList from "./components/contacts_list/ContactCardsList";
import JokesList from "./components/jokes_list/JokesList";
import ProductsList from "./components/products/ProductsList";

const App = () => (
  <>
    <Navbar />
    <MyInfo />
    <ToDoList />
    <ContactCardsList />
    <JokesList />
    <ProductsList />
    <Footer />
  </>
);

export default App;
