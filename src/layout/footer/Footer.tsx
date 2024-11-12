import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import Icon from '../../components/icon/Icon';
import { SocialLink } from '../../components/socialLink/SocialLink';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper justify="space-evenly">
        <Logo />
        <ContactWrapper>
          <Contact>
            <Icon iconId="faPhone" width="10" height="14" viewBox="0 0 10 14" />
            <ContactText>+91 12345 09876</ContactText>
          </Contact>
          <Contact>
            <Icon iconId="faPhone" width="10" height="14" viewBox="0 0 10 14" />
            <ContactText>info@example.com</ContactText>
          </Contact>
          <SocialLink />
        </ContactWrapper>
      </FlexWrapper>
      <HorizontalRow />
      <FlexWrapper justify="space-evenly">
        <NavigationLinks>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </NavigationLinks>
        <CreditsText>Designed and built by Pavan MG with Love & Coffee</CreditsText>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.section``;

const ContactWrapper = styled.div`
  display: flex;
`;
const Contact = styled.div``;
const ContactText = styled.span``;

const HorizontalRow = styled.div`
  height: 2px;
  width: 100%;
  background-color: #252632;
`;

const NavigationLinks = styled.div`
  ul {
    display: flex;
  }
`;
const CreditsText = styled.p``;
