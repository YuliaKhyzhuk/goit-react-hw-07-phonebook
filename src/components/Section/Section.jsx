import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <div>{children}</div>
    </SectionContainer>
  );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};


export default Section;