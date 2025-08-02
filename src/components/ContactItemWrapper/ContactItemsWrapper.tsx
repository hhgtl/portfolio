import React from 'react';
import styled from 'styled-components';
import { Contact } from './Contact/Contact';
import { theme } from '../../styles/Theme';

export const ContactItemsWrapper = () => {
  return (
    <ContactItemsWrapperStyled>
      <Contact iconId={'phone'} contactText="380 631 066 920" />
      <Contact iconId={'email'} contactText="petrosahal66@gmail.com" />
    </ContactItemsWrapperStyled>
  );
};

const ContactItemsWrapperStyled = styled.div`
  display: flex;
    align-items: center;
height: 36px;
  gap: 32px;
  @media ${theme.media.tablet} {
    flex-direction: column;
    justify-content: flex-start;
    gap: 0;
  }
`;
