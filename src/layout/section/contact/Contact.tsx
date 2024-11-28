import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <Title>For any questions please mail me:</Title>
        <Adress>hi@pavanmg.in</Adress>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  text-align: center;
`;

const Title = styled.h3`
  line-height: 70px;
  ${font({ Fmax: 58, Fmin: 28, weight: 700, color: theme.color.primaryFont, family: 'DM Sans' })}
`;

const Adress = styled.h3`
  ${font({ Fmax: 58, Fmin: 28, weight: 700, color: 'transparent', family: 'DM Sans' })}
  background-image: linear-gradient(90deg, #13b0f5, #e70faa);
  -webkit-background-clip: text;
`;
