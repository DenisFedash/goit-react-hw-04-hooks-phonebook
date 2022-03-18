import React, { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

import { nanoid } from 'nanoid'

export default class APP extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  addContacts = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    const { contacts } = this.state;

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      
    } else if
      (contacts.find(contact => contact.number === number)){
      alert (`${number} is already in contacts`)
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
    
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

    
  render() {
    const { filter } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();
  
    const filtredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts} />
        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={filtredContacts} onDeleteContact={this.deleteContact}/>
      </div>
  );
  }
  
};
