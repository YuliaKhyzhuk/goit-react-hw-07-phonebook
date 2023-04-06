import React from 'react';

import {
  DeleteContactButton,
  ContactsContainer,
  ContactsData,
} from './ContactsList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectedContacts } from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectedContacts);

  return (
    <ContactsContainer>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactsData key={id}>
          {name}: {number}
          <DeleteContactButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </DeleteContactButton>
        </ContactsData>
      ))}
    </ContactsContainer>
  );
};

export default ContactsList;
