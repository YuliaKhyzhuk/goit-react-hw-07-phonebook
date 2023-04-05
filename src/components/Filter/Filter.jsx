import React from 'react';

import { FilterContainer, FilterInput } from './Filter.styled';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterContainer>
    Find contacts by name
    <FilterInput type="text"  onChange={event => dispatch(setFilter(event.target.value))} />
  </FilterContainer>
  )
  };

export default Filter;
