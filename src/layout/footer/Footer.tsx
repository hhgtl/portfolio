import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/icon/Icon';
import { SocialLink } from '../../components/socialLink/SocialLink';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';
import { Menu } from '../../components/menu/Menu';
import { theme } from '../../styles/Theme';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <MarginFlexWrapper justify="space-between">
          <IconLink href="#">
            <Icon iconId="logo" width="97px" height="60px" viewBox="0 0 97 60" />
          </IconLink>
          <ContactWrapper>
            <ContactItemWrapper>
              <Contact>
                <Icon iconId="faPhone" width="10" height="14" viewBox="0 0 10 14" />
                <ContactText>+91 12345 09876</ContactText>
              </Contact>
              <Contact>
                <Icon iconId="faPhone" width="10" height="14" viewBox="0 0 10 14" />
                <ContactText>info@example.com</ContactText>
              </Contact>
            </ContactItemWrapper>
            <SocialLink />
          </ContactWrapper>
        </MarginFlexWrapper>
        <FlexWrapper justify="space-between" align="center" style={{ marginBottom: '60px' }}>
          <Menu fontSize="18px" fontWeight="400" width="554px" />
          <CreditsText>
            Designed and built by{' '}
            <GradientText>
              Pavan MG <span>with</span> Love <span>&</span> Coffee
            </GradientText>
          </CreditsText>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.section``;

const MarginFlexWrapper = styled(FlexWrapper)`
  margin-bottom: 94px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    top: 104px;
    left: 0;
    right: 0;
    background-color: #252632;
  }
`;
const ContactItemWrapper = styled.div`
  display: flex;
  margin-right: 78px;
`;
const Contact = styled.div`
  height: 26px;
  svg {
    margin-right: 14px;
    transform: translateY(5px);
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  ${Contact} + ${Contact} {
    margin-left: 32px;
  }
`;

const ContactText = styled.span`
  color: ${theme.color.nav};
  font-family: 'DM Sans';
  font-size: 18px;
  font-weight: 400;
`;

const CreditsText = styled.small`
  color: ${theme.color.nav};
  font-weight: 400px;
  font-size: 18px;
`;

const GradientText = styled.span`
  background-image: linear-gradient(90deg, #13b0f5, #e70faa);
  -webkit-background-clip: text;
  color: transparent;
  span {
    color: ${theme.color.nav};
  }
`;
const IconLink = styled.a``;
