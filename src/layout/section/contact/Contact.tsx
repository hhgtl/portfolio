import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Contact = () => {
  return (
    <StyledContact>
      <Title>For any questions please mail me:</Title>
      <Adress>hi@pavanmg.in</Adress>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  margin-bottom: 200px;
  text-align: center;
`;

const Title = styled.h3`
  color: ${theme.color.primaryFont};
  font-family: 'DM Sans';
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
`;

const Adress = styled.h3`
  font-family: 'DM Sans';
  font-size: 58px;
  font-weight: 700;
  background-image: linear-gradient(90deg, #13b0f5, #e70faa);
  color: transparent;
  -webkit-background-clip: text;
`;
