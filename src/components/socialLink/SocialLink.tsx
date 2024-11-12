import React from 'react';
import Icon from '../icon/Icon';
import { FlexWrapper } from '../FlexWrapper';
import styled from 'styled-components';

export const SocialLink = () => {
  return (
    <StyledSocialLink>
      <ul>
        <li>
          <a href="">
            <Icon iconId="githubGrey" width="30" height="30" viewBox="0 0 30 30" />
          </a>
        </li>
        <li>
          <a href="">
            <Icon iconId="twitter" width="32" height="32" viewBox="0 0 34 34" />
          </a>
        </li>
        <li>
          <a href="">
            <Icon iconId="linkedIn" width="30" height="30" viewBox="0 0 30 30" />
          </a>
        </li>
      </ul>
    </StyledSocialLink>
  );
};

const StyledSocialLink = styled.div`
  ul {
    display: flex;
  }
`;
