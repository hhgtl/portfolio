import React from 'react';
import styled from 'styled-components';

type SectionTitlePropsType = {
  title: string;
  description: string;
  marginBottom: string;
};

export const SectionTitle = (props: SectionTitlePropsType) => {
  return (
    <StyledSectionTitle marginBottom={props.marginBottom}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </StyledSectionTitle>
  );
};

type StyledSectionTitleProps = {
  marginBottom: string;
};

const StyledSectionTitle = styled.div<StyledSectionTitleProps>`
  margin-bottom: ${(props) => props.marginBottom || 0};
  h2 {
    margin-bottom: 50px;
    color: rgb(204, 204, 204);
    font-family: Poppins;
    font-size: 48px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
  }
  p {
    color: rgb(167, 167, 167);
    font-family: Poppins;
    font-size: 32px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
  }
`;
