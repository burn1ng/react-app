import React from "react";
import ContactCard from "./ContactCard";
import contacts from "./contacts.json";
import "./contacts_list.css";

const ContactCardsList = () => {
  return (
    <div className="contacts">
      {contacts.map(contact => (
        <ContactCard key={contact.name} contact={contact} />
      ))}
    </div>
  );
};

export default ContactCardsList;
