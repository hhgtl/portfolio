import React from 'react';
import { Container } from '../../../components/Container';
import { S } from './Contact_Styled';

export const Contact: React.FC = () => {
  return (
    <S.Contact>
      <Container>
        <S.Title>For any questions please mail me:</S.Title>
        <S.Adress>hi@pavanmg.in</S.Adress>
      </Container>
    </S.Contact>
  );
};
