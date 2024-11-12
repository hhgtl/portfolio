import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photo from '../../../asests/img/photo.png';
import styled from 'styled-components';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align="center" justify="center">
        <TitleTextWrapper>
          <TitleText>Hi 👋,</TitleText>
          <TitleText>My name is</TitleText>
          <Name>Pavan MG</Name>
          <TitleText>I build things for web</TitleText>
        </TitleTextWrapper>
        <Photo src={photo} alt="My photo" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section``;

const Photo = styled.img`
  width: 350px;
  height: 350px;
  background: linear-gradient(#e70faa, #00c0fd);
  border: 9px solid transparent;
  border-radius: 50%;
  background-clip: padding-box;
  padding: 10px;
`;

const TitleTextWrapper = styled.div`
  width: 636px;
  height: 280px;
`;

const TitleText = styled.span`
  display: block;
`;

const Name = styled.span`
  display: block;
`;
