import React from 'react';

import { FilterContainer, FilterInput } from './Filter.styled';

import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterContainer>
    Find contacts by name
    <FilterInput type="text"  onChange={event => dispatch(filterContacts(event.target.value))} />
  </FilterContainer>
  )
  };

export default Filter;
