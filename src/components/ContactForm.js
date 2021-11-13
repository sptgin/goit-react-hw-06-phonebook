import React, { useState } from 'react';
import PropsType from 'prop-types';
import { v4 as uuid } from 'uuid';
import './ContactForm.css';

export default function ContactForm({ onSubmit }) {
  let nameId = uuid();
  let numberId = uuid();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const formChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formSubmit = event => {
    event.preventDefault();
    const contact = {
      id: uuid(),
      name: name,
      number: number,
    };
    onSubmit(contact);
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="contacts__form" onSubmit={formSubmit}>
      <label className="contcts__form-label" htmlFor={nameId}>
        Name
        <input
          className="contcts__form-input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={formChange}
          id={nameId}
        />
      </label>
      <label className="contcts__form-label" htmlFor={numberId}>
        Number
        <input
          className="contcts__form-input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={formChange}
          id={numberId}
        />
      </label>
      <button className="contacts__form-button" type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.PropsType = {
  onSubmit: PropsType.func.isRequired,
};
