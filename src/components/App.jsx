import React, { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Section, Title, TitleList } from "./App.styled";

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

    if (contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )
    ) {
      alert(`${name} is already in contacts.`)
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
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
  
    const filtredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    
    return (
      <Section>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContacts} />
        
        <TitleList>Contacts</TitleList>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={filtredContacts} onDeleteContact={this.deleteContact}/>
      </Section>
  );
  }
  
};
