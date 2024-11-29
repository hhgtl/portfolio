import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../../components/FlexWrapper';

const Footer = styled.section`
  margin: 0;
  ${FlexWrapper} {
    margin-bottom: 60px;
    @media ${theme.media.mobile} {
      margin-bottom: 30px;
    }
  }
`;

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
    @media screen and (max-width: 576px) {
      top: 75px;
    }
    @media screen and (max-width: 478px) {
      top: 140px;
    }
    @media screen and (max-width: 369px) {
      top: 195px;
    }
  }
  @media screen and (max-width: 496px) {
    justify-content: center;
    margin-bottom: 54px;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 78px;
  flex-wrap: wrap;
  @media ${theme.media.mobile} {
    gap: 24px;
  }
  @media screen and (max-width: 387px) {
    justify-content: center;
  }
`;

const CreditsText = styled.small`
  color: ${theme.color.nav};
  font-weight: 400px;
  font-size: 18px;
  @media screen and (max-width: 1100px) {
    margin: 0 auto;
  }
`;

const GradientText = styled.span`
  background-image: linear-gradient(90deg, #13b0f5, #e70faa);
  -webkit-background-clip: text;
  color: transparent;
  span {
    color: ${theme.color.nav};
  }
`;

export const S = {
  Footer,
  MarginFlexWrapper,
  ContactWrapper,
  CreditsText,
  GradientText,
};
