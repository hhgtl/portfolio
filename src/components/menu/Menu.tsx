import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import React from 'react';

type MenuPropsType = {
  width?: string;
  fontWeight?: string;
  fontSize?: string;
};

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  const listItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];
  const { width, fontWeight, fontSize } = props;
  const styleProps = { width, fontWeight, fontSize };
  return (
    <StyledMenu {...styleProps}>
      {listItems.map((item, i) => (
        <ListLink key={i} {...styleProps} href="#">
          {item}
        </ListLink>
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  gap: 50px;
  align-content: center;
`;

const ListLink = styled.a<MenuPropsType>`
  font-family: 'DM Sans';
  font-size: ${(props) => props.fontSize || '20px'};
  font-weight: ${(props) => props.fontWeight || 500};
  color: ${theme.color.nav};
  cursor: pointer;
`;
