import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/Theme';

type SectionTitlePropsType = {
  title: string;
  description: string;
  marginBottom: number;
};

export const SectionTitle: React.FC<SectionTitlePropsType> = (props: SectionTitlePropsType) => {
  return (
    <StyledSectionTitle marginBottom={props.marginBottom}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </StyledSectionTitle>
  );
};

type StyledSectionTitleProps = {
  marginBottom: number;
};

const StyledSectionTitle = styled.div<StyledSectionTitleProps>`
  margin-bottom: ${(props) => props.marginBottom + 'px' || 0};
  @media ${theme.media.mobile} {
    margin-bottom: ${(props) => props.marginBottom / 2 + 'px' || 0};
  }
  h2 {
    margin-bottom: 50px;
    color: rgb(204, 204, 204);
    font-family: Poppins;
    font-size: 48px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
    @media ${theme.media.mobile} {
      font-size: 32px;
      margin-bottom: 25px;
    }
  }
  p {
    color: rgb(167, 167, 167);
    font-family: Poppins;
    font-size: 32px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
    @media ${theme.media.mobile} {
      font-size: 22px;
    }
  }
`;
