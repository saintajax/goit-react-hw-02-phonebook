import React, { Component } from 'react';
import { Box } from './Box/Box';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { InputField } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };
    if (!newContact.name || !newContact.number) {
      return;
    }
    contacts.some(contact => contact.name === newContact.name) ||
    contacts.some(contact => contact.number === newContact.number)
      ? alert(`This contact is already in list`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );
      return {
        contacts: newContacts,
        name: '',
        number: '',
      };
    });
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    const normFilter = filter.trim().toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );

    return (
      <Box
        width="800px"
        display="flex"
        flexDirection="column"
        ml="auto"
        mr="auto"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Phonebook</h1>
        <InputField
          valueName={name}
          valueNumber={number}
          handleChange={this.handleInputChange}
          addContact={this.addContact}
        />

        {contacts.length ? (
          <>
            <h2>Contacts</h2>
            <Filter
              valueFilter={filter}
              handleChange={this.handleInputChange}
            />
            <ContactsList contacts={visibleContacts} del={this.deleteContact} />
          </>
        ) : (
          ''
        )}
      </Box>
    );
  }
}
