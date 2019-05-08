import React from "react";

const ContactCard = props => (
  <div className="contact-card">
    <img
      align="center"
      src={props.contact.imgUrl}
      alt={`lovely kitten ${props.contact.name}`}
      title={`litten ${props.contact.name}`}
    />
    <h3>
      <font color="#3AC1EF">▍{props.contact.name}</font>
    </h3>
    <p>Phone: {props.contact.phone}</p>
    <p>Email: {props.contact.email}</p>
  </div>
);

export default ContactCard;
