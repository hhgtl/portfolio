import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import React from 'react';

type MenuPropsType = {
  width?: string;
  fontWeight?: string;
  fontSize?: string;
};

export const Menu = (props: MenuPropsType) => {
  const listItems = [{value: 'Home', id: 'home'}, {value: 'Tech Stack', id: 'tech'}, {value: 'Projects', id: 'projects'}, {value: 'Contact', id: 'contact'}];
  const { width, fontWeight, fontSize } = props;
  const styleProps = { width, fontWeight, fontSize };
  return (
    <StyledMenu {...styleProps}>
      {listItems.map((item, i) => (
        <ListLink key={i} {...styleProps} href={`#${item.id}`}>
          {item.value}
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
