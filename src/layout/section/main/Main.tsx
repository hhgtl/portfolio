import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photo from '../../../asests/img/photo.png';
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import photoDecore from '../../../asests/img/photoDecore.svg';
import { font } from '../../../styles/Common';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align="center" justify="space-around" wrap="wrap">
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
  overflow: hidden;
  @media ${theme.media.tablet} {
    margin-top: 40px;
    /* height: 110vh; */
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  &::before {
    content: '';
    background-image: url(${photoDecore});
    background-repeat: no-repeat;
    background-size: cover;
    width: 628px;
    height: 628px;
    position: absolute;
    top: -160px;
    left: -120px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 460px;
      height: 460px;
      top: -100px;
      left: -80px;
    }
  }
  @media screen and (max-width: 843px) {
    top: -180px;
  }

  @media ${theme.media.tablet} {
    top: -60px;
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

  @media ${theme.media.mobile} {
    width: 280px;
    height: 280px;
    padding: 7px;
  }
`;

const TitleTextWrapper = styled.div`
  max-width: 636px;
  max-height: 280px;
`;

const TitleText = styled.span`
  color: ${theme.color.titleFont};
  font-size: 58px;
  font-weight: 700;
  display: block;

  ${font({ Fmax: 58, Fmin: 24, weight: 700 })}
`;

const Name = styled.span`
  font-size: 58px;
  font-weight: 700;
  color: transparent;
  background-image: linear-gradient(76deg, rgb(0, 192, 253), rgb(231, 15, 170));
  -webkit-background-clip: text;
  display: block;
  /* @media screen and (max-width: 1180px) {
    font-size: 40px;
  }
  @media ${theme.media.mobile} {
    font-size: 28px;
  } */

  ${font({
    Fmax: 58,
    Fmin: 28,
    weight: 700,
    color: 'transparent',
  })}
`;
