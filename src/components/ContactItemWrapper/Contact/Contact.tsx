import React from 'react';
import Icon from '../../icon/Icon';
import styled from 'styled-components';
import { ContactText } from '../../ContactText/ContactText';

type ContanctPropsType = {
  contactText: string;
};

export const Contact: React.FC<ContanctPropsType> = (props: ContanctPropsType) => {
  return (
    <ContactStyled>
      <Icon iconId="faPhone" width="10" height="14" viewBox="0 0 10 14" />
      <ContactText>{props.contactText}</ContactText>
    </ContactStyled>
  );
};

const ContactStyled = styled.div`
  height: 26px;
  svg {
    margin-right: 14px;
    transform: translateY(5px);
  }
`;
