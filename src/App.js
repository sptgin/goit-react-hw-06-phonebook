import React, { useState, useEffect } from 'react';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactsList from './components/ContactsList';
import './App.css';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getChange = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const findContact = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    if (filter.length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    } else {
      return contacts;
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div>
      <h1 className="header__main">React HW 006 Phonebook</h1>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={getChange} />
        <ContactsList
          findContact={findContact}
          onDeleteContact={deleteContact}
        />
      </Section>
    </div>
  );
}
