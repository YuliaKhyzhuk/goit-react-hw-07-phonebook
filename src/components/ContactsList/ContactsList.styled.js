import styled from 'styled-components';

export const ContactsContainer = styled.ul`
width: 100%;
padding-inline-start: 0;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  // flex-basis: calc(100% / 3 - 20px);
  // padding: 16px 0 16px 0;
  font-weight: bold;
  font-size: 12px;
  // background-color: ${props => props.theme.colors.backgroundYellow};
  // box-shadow: 0px 0px 10px 0px ${props =>
    props.theme.colors.secondaryAccent};
  // border: 1px solid ${props => props.theme.colors.secondary};
  // border-radius: ${props => props.theme.borderRadius.sm};
`;

export const ContactsData = styled.li`
  width: 100%;
  // padding-inline-start: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // gap: 20px;
  // justify-content: flex-end;
`;

export const DeleteContactButton = styled.button`
  display: flex;
  // text-align: center;
  justify-content: center;
  // flex-direction: column;
  align-items: center;
  // gap: 10px;
  flex-basis: calc(100% / 3 - 20px);
  padding-top: 8px;
  padding-bottom: 8px;
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
