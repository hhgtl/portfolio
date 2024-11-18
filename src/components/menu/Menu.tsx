import styled from 'styled-components';
import { theme } from '../../styles/Theme';

type MenuPropsType = {
  width?: string;
  fontWeight?: string;
  fontSize?: string;
};

export const Menu = (props: MenuPropsType) => {
  const listItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];
  const { width, fontWeight, fontSize } = props;
  const styleProps = { width, fontWeight, fontSize };
  return (
    <StyledMenu {...styleProps}>
      <ListItems>
        {listItems.map((item, i) => (
          <ListItem key={i}>
            <ListLink {...styleProps}>{item}</ListLink>
          </ListItem>
        ))}
      </ListItems>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav<MenuPropsType>`
  min-width: ${(props) => props.width || '610px'};
  align-content: center;
`;

const ListItems = styled.ul<MenuPropsType>`
  display: flex;
  justify-content: space-between;
  margin-right: 50px;
`;

const ListItem = styled.li``;

const ListLink = styled.a<MenuPropsType>`
  font-family: 'DM Sans';
  font-size: ${(props) => props.fontSize || '20px'};
  font-weight: ${(props) => props.fontWeight || 500};
  color: ${theme.color.nav};
  cursor: pointer;
`;
