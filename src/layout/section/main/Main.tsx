import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photo from '../../../asests/img/photo.png';
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import photoDecore from '../../../asests/img/photoDecore.svg';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align="center" justify="space-between">
          <TitleTextWrapper>
            <TitleText>Hi 👋,</TitleText>
            <TitleText>My name is</TitleText>
            <Name>Pavan MG</Name>
            <TitleText>I build things for web</TitleText>
          </TitleTextWrapper>
          <PhotoWrapper>
            <Photo src={photo} alt="My photo" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  height: 100vh;
  display: flex;
  margin-bottom: 10px;
`;

const PhotoWrapper = styled.div`
  position: relative;
  &::before {
    content: '';
    background-image: url(${photoDecore});
    width: 628px;
    height: 628px;
    position: absolute;
    top: -160px;
    left: -120px;
    z-index: -1;
  }
`;

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
  color: ${theme.color.titleFont};
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  width: 636px;
  height: 280px;
`;

const TitleText = styled.span`
  color: ${theme.color.titleFont};
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  display: block;
`;

const Name = styled.span`
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  background-image: linear-gradient(76deg, rgb(0, 192, 253), rgb(231, 15, 170));
  color: transparent;
  -webkit-background-clip: text;
  display: block;
`;
