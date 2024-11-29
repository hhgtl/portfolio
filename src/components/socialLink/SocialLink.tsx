import React from 'react';
import Icon from '../icon/Icon';
import styled from 'styled-components';
import { Link } from '../Link/Link';

export const SocialLink: React.FC = () => {
  return (
    <StyledSocialLink>
      <ListItemsWrapper>
        <Link href="" aria-label="Github link">
          <Icon iconId="githubGrey" width="30" height="30" viewBox="0 0 30 30" />
        </Link>
        <Link href="" aria-label="Twitter link">
          <Icon iconId="twitter" width="32" height="32" viewBox="0 0 34 34" />
        </Link>
        <Link href="" aria-label="LinkedIn link">
          <Icon iconId="linkedIn" width="30" height="30" viewBox="0 0 30 30" />
        </Link>
      </ListItemsWrapper>
    </StyledSocialLink>
  );
};

const StyledSocialLink = styled.div``;

const ListItemsWrapper = styled.div`
  max-height: 30px;
  display: flex;
  gap: 20px;
`;
