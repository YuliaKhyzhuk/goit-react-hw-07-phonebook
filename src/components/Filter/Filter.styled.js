import styled from 'styled-components';

export const FilterContainer = styled.label`
width: 300px;

  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  padding: 0;
`;

export const FilterInput = styled.input`
width: 100%;
  font-size: 12px;
  cursor: pointer;
  outline: none;
  border-radius: ${props => props.theme.borderRadius.sm};
  background-color: ${props => props.theme.colors.primaryAccent};
  box-shadow: ${props => {
    return ` 0 1px 3px ${props.theme.colors.secondaryAccent}`;
  }};
  transition: ${props => props.theme.transition};
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;


