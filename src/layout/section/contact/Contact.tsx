import React from 'react';
import { Container } from '../../../components/Container';
import { S } from './Contact_Styled';

export const Contact = () => {
  return (
    <S.Contact id={'contact'}>
      <Container>
        <S.Title>З будь-яких питань, будь ласка, пишіть мені:</S.Title>
        <S.Adress>petrosahal66@gmail.com</S.Adress>
      </Container>
    </S.Contact>
  );
};
