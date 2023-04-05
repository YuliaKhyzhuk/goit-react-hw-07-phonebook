import React from 'react';
import { GlobalStyle } from './GlobalStyle';

import Section from './Section/Section';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';


export function App () {
     return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: 16,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <Form />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactsList />
        </Section>

        <GlobalStyle />
      </div>
    );
  }

  export default App;