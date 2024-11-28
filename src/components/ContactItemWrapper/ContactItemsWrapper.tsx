import React from 'react';
import styled from 'styled-components';
import { Contact } from './Contact/Contact';
import { theme } from '../../styles/Theme';

export const ContactItemsWrapper = () => {
  return (
    <ContactItemsWrapperStyled>
      <Contact contactText="+91 12345 09876" />
      <Contact contactText="info@example.com" />
    </ContactItemsWrapperStyled>
  );
};

const ContactItemsWrapperStyled = styled.div`
  display: flex;

  gap: 32px;
  @media ${theme.media.tablet} {
    flex-direction: column;
    justify-content: flex-start;
    gap: 0;
  }
`;
