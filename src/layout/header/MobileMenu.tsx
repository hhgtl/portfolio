import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';
import { useState } from 'react';
import { SocialLink } from '../../components/socialLink/SocialLink';

type MenuPropsType = {
  width?: string;
  fontWeight?: string;
  fontSize?: string;
};

export const MobileMenu = (props: MenuPropsType) => {
  const listItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];
  const { width, fontWeight, fontSize } = props;
  const styleProps = { width, fontWeight, fontSize };

  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledMobileMenu {...styleProps}>
      <BurgerButton
        isOpen={isOpen}
        onClick={toggleIsOpen}
        aria-haspopup={true}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={isOpen}>
        {listItems.map((item, i) => (
          <ListLink key={i} {...styleProps} href="#">
            {item}
          </ListLink>
        ))}
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav<MenuPropsType>`
  display: none;
  flex-direction: column;
  gap: 50px;
  align-content: center;
  @media ${theme.media.tablet} {
    display: flex;
  }
`;
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.9);
  a {
    margin-bottom: 10px;
  }
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
    `}
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: relative;
  z-index: 9999999;
  width: 36px;
  height: 30px;
  cursor: pointer;
  span {
    position: relative;
    display: block;
    height: 2px;
    width: 36px;
    background-color: ${theme.color.linkPrimary};
    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgb(255, 255, 255, 0);
        width: 36px;
      `}

    &::before {
      content: '';
      display: block;
      height: 2px;
      width: 36px;
      background-color: ${theme.color.linkPrimary};
      transform: translateY(-10px);
      transition: all 0.2s;
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
          width: 36px;
        `}
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      display: block;
      height: 2px;
      width: 24px;
      background-color: ${theme.color.linkPrimary};
      transform: translateY(10px);
      transition: all 0.2s;
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`;

const ListLink = styled.a<MenuPropsType>`
  font-family: 'DM Sans';
  font-size: ${(props) => props.fontSize || '20px'};
  font-weight: ${(props) => props.fontWeight || 500};
  color: ${theme.color.nav};
  cursor: pointer;
`;
