import React from "react";
import products from "./products.json";

const Product = props => (
  <>
    <h1>{props.product.name}</h1>
    <p>
      {props.product.price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      })}
    </p>
    <p>{props.product.description}</p>
  </>
);

const ProductsList = () =>
  products.map(item => <Product key={item.name} product={item} />);

export default ProductsList;
