import React from 'react';
import Icon from '../icon/Icon';
import styled from 'styled-components';
import { ListItem } from '../ListItems/ListItem/ListItem';
import { Link } from '../Link/Link';
import { ListItemsWrapper } from '../ListItems/ListItemsWrapper';

export const SocialLink = () => {
  return (
    <StyledSocialLink>
      <ListItemsWrapper>
        <ListItem>
          <Link href="">
            <Icon iconId="githubGrey" width="30" height="30" viewBox="0 0 30 30" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="">
            <Icon iconId="twitter" width="32" height="32" viewBox="0 0 34 34" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="">
            <Icon iconId="linkedIn" width="30" height="30" viewBox="0 0 30 30" />
          </Link>
        </ListItem>
      </ListItemsWrapper>
    </StyledSocialLink>
  );
};

const StyledSocialLink = styled.div`
  ${ListItemsWrapper} {
    max-height: 30px;
    display: flex;
    ${ListItem} + ${ListItem} {
      margin-left: 20px;
    }
  }
`;
