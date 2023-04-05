import styled from 'styled-components';

export const FormContainer = styled.div`
display: flex;
gap: 10px;
margin-bottom: 20px;
`;

export const FormInput = styled.input`
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

export const AddContactButton = styled.button`
  display: flex;
  // justify-content: space-between;
  // flex-direction: column;
  // align-items: center;
  // gap: 10px;
  flex-basis: calc(100% / 3 - 20px);
  padding: 8px;
  font-size: 12px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${props => props.theme.colors.backgroundYellow};
  box-shadow: 0px 0px 10px 0px ${props => props.theme.colors.secondaryAccent};
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderRadius.sm};
  transition: ${props => props.theme.transition};
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;


