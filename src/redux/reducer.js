import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, delContact, setFilter } from './actions';

const loadContacts = [];

// const [contacts, setContacts] = useState(
//   JSON.parse(localStorage.getItem('contacts')) ?? [],
// );
// const [filter, setFilter] = useState('');

// useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);

const contactReducer = createReducer(loadContacts, {
  [addContact]: (state, { payload }) => {
    console.log('add contact');
    const checkContact = state.some(
      contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
    );
    if (checkContact) {
      alert(`this contact already exists`);
      return state;
    } else {
      return [...state, payload];
    }

    // const checkContact = name => {
    //   return contacts.find(contact => {
    //     return contact.name.toLocaleLowerCase() === name.toLocaleLowerCase();
    //   });
    // };

    // const addContact = contact => {
    //   if (!checkContact(contact.name)) {
    //     setContacts([contact, ...contacts]);
    //   } else {
    //     alert(`${contact.name} is already in contacts`);
    //   }
    // };
  },
  [delContact]: (state, { payload }) => {
    console.log('del contact');
  },
});

const filterReducer = createReducer('', {
  [setFilter]: (state, { payload }) => {
    console.log('set filter');
  },
});

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export default rootReducer;
