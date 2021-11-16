import React from 'react';
import PropsType from 'prop-types';
import { v4 as uuid } from 'uuid';
import './ContactForm.css';
import { useForm } from 'react-hook-form';
import { addContact } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(addContact({ ...data, id: uuid() }));
    reset();
  };

  let nameId = uuid();
  let numberId = uuid();
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const formChange = event => {
  //   const { name, value } = event.currentTarget;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  // const formSubmit = event => {
  //   event.preventDefault();
  //   const contact = {
  //     id: uuid(),
  //     name: name,
  //     number: number,
  //   };
  //   onSubmit(contact);
  //   formReset();
  // };

  // const formReset = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <form className="contacts__form" onSubmit={handleSubmit(onSubmit)}>
      <label className="contcts__form-label" htmlFor={nameId}>
        Name
        <input
          className="contcts__form-input"
          type="text"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          {...register('name', {
            required: true,
            pattern:
              /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
          })}
        />
        {errors?.name?.type === 'required' && <p>This field is required</p>}
        {errors?.name?.type === 'pattern' && (
          <p>Alphabetical characters only</p>
        )}
      </label>
      <label className="contcts__form-label" htmlFor={numberId}>
        Number
        <input
          className="contcts__form-input"
          type="tel"
          {...register('number', {
            required: true,
            pattern:
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
          })}
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        />
        {errors?.number?.type === 'required' && <p>This field is required</p>}
        {errors?.number?.type === 'pattern' && <p>Numeric characters only</p>}
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
