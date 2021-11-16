import PropTypes from 'prop-types';
import './ContactListItem.css';

export default function ContactListItem({ contact, handleDelContact }) {
  return (
    <li className="contact__list-item">
      <div>
        {contact.name}: {contact.number}
      </div>
      <button
        className="contact__list-delete-button"
        type="submit"
        id={contact.id}
        onClick={handleDelContact}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
