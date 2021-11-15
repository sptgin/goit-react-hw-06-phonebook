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
      alert(`${payload.name} is already exists`);
      console.log(state);
      console.log(payload);
      return state;
    } else {
      console.log(state);
      console.log(payload);
      return [...state, payload];
    }
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
