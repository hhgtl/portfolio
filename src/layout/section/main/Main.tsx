import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photo from '../../../asests/img/photo.png';
import { Container } from '../../../components/Container';
import { S } from './Main_Styled';

export const Main = () => {
  return (
    <S.Main id="home">
      <Container>
        <FlexWrapper align="center" justify="space-around" wrap="wrap">
          <S.TitleTextWrapper>
            <S.TitleText>Привіт 👋,</S.TitleText>
            <S.TitleText>Мене звати</S.TitleText>
            <S.Name>Петро</S.Name>
            <S.TitleText>Я веб-розробник</S.TitleText>
          </S.TitleTextWrapper>
          <S.PhotoWrapper>
            <S.Photo src={photo} alt="My photo" />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
