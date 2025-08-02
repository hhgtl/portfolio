import React from 'react';
import Icon from '../../icon/Icon';
import styled from 'styled-components';
import { ContactText } from '../../ContactText/ContactText';

type ContanctPropsType = {
  contactText: string;
  iconId: string;
};

export const Contact = (props: ContanctPropsType) => {
  return (
    <ContactStyled>
      <Icon iconId={props.iconId} width="36" height="36" viewBox="0 0 36 36" />
      <ContactText>{props.contactText}</ContactText>
    </ContactStyled>
  );
};

const ContactStyled = styled.div`
    display: flex;
    align-items: center;
  height: 36px;
  svg {
    margin-right: 10px;
  }
`;
