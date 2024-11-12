import React from 'react';
import styled from 'styled-components';

export const Contact = () => {
  return (
    <StyledContact>
      <Title>For any questions please mail me:</Title>
      <Adress>hi@pavanmg.in</Adress>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  height: 100vh;
  text-align: center;
`;

const Title = styled.h3``;

const Adress = styled.span``;
