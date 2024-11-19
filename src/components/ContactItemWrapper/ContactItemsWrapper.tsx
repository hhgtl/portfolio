import React from 'react';
import styled from 'styled-components';
import { Contact } from './Contact/Contact';

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
  margin-right: 78px;
  div + div {
    margin-left: 32px;
  }
`;
