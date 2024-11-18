import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';
import { SocialLink } from '../../components/socialLink/SocialLink';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import Icon from '../../components/icon/Icon';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <IconLink href="#">
            <Icon iconId="logoGradient" width="97px" height="60px" viewBox="0 0 97 60" />
          </IconLink>
          <FlexWrapper>
            <Menu />
            <SocialLink />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgba(25, 25, 25, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  max-height: 100px;
  padding-top: 20px;
  height: 100%;
`;

const IconLink = styled.a``;
