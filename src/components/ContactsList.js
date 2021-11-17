import ContactListItem from './ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { delContact } from '../redux/actions';
import './ContactsList.css';

export default function ContactsList({ handleDelContact }) {
  const contacts = useSelector(state =>
    state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(state.filter.toLowerCase()),
    ),
  );

  console.log(contacts);

  const dispatch = useDispatch();
  return (
    <ul className="contact__list">
      {contacts.map(contact => {
        return (
          <ContactListItem
            className="contacts__list-item"
            key={contact.id}
            contact={contact}
            handleDelContact={() => dispatch(delContact(contact.id))}
          />
        );
      })}
    </ul>
  );
}
