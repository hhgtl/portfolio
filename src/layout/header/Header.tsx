import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';
import { SocialLink } from '../../components/socialLink/SocialLink';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import Icon from '../../components/icon/Icon';
import { Link } from '../../components/Link/Link';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center" gap="50px">
          <Link href="#">
            <Icon iconId="logoGradient" width="97px" height="60px" viewBox="0 0 97 60" />
          </Link>
          <FlexWrapper gap="50px">
            <Menu />
            <MobileMenu />
            <SocialLinkWrapper>
              <SocialLink />
            </SocialLinkWrapper>
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

const SocialLinkWrapper = styled.div`
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
