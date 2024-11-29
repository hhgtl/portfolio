import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photo from '../../../asests/img/photo.png';
import { Container } from '../../../components/Container';
import { S } from './Main_Styled';

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper align="center" justify="space-around" wrap="wrap">
          <S.TitleTextWrapper>
            <S.TitleText>Hi 👋,</S.TitleText>
            <S.TitleText>My name is</S.TitleText>
            <S.Name>Pavan MG</S.Name>
            <S.TitleText>I build things for web</S.TitleText>
          </S.TitleTextWrapper>
          <S.PhotoWrapper>
            <S.Photo src={photo} alt="My photo" />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
