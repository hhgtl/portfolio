import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';

type MenuPropsType = {
  width?: string;
  fontWeight?: string;
  fontSize?: string;
  mediaMaxWidth?: string;
};

export const Menu = (props: MenuPropsType) => {
  const listItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];
  const { width, fontWeight, fontSize, mediaMaxWidth } = props;
  const styleProps = { width, fontWeight, fontSize, mediaMaxWidth };
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

const StyledMenu = styled.nav<MenuPropsType>`
  display: flex;
  gap: 50px;
  align-content: center;
  ${(props) =>
    props.mediaMaxWidth
      ? css<MenuPropsType>`
          @media screen and (max-width: ${props.mediaMaxWidth}) {
            display: none;
          }
        `
      : css<MenuPropsType>`
          @media ${theme.media.tablet} {
            display: none;
          }
        `}
`;

const ListLink = styled.a<MenuPropsType>`
  font-family: 'DM Sans';
  font-size: ${(props) => props.fontSize || '20px'};
  font-weight: ${(props) => props.fontWeight || 500};
  color: ${theme.color.nav};
  cursor: pointer;
`;
