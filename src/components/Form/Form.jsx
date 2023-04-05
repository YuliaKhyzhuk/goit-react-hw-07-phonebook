import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import { FormInput, AddContactButton, FormContainer } from './Form.styled';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleInputChange = event => {
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

  const handleSubmit = event => {
    event.preventDefault();

    const contactExists = contacts.find(contact => contact.name === name);

    if (contactExists) return alert('The contact already exists!');

    dispatch(addContact({ name, number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <label htmlFor={nameInputId}>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleInputChange}
            id={nameInputId}
            required
          />
        </label>
        <label htmlFor={numberInputId}>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleInputChange}
            id={numberInputId}
            required
          />
        </label>
      </FormContainer>

      <AddContactButton type="submit">Add contact</AddContactButton>
    </form>
  );
};

export default Form;
