import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { SocialLink } from '../../components/socialLink/SocialLink';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <div>
        <Menu />
        <SocialLink />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
  }
`;
