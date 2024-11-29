import styled from 'styled-components';
const Header = styled.header`
  background-color: rgba(25, 25, 25, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  max-height: 100px;
  padding-top: 20px;
  height: 100%;
`;

const SocialLinkWrapper = styled.div`
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const S = {
  Header,
  SocialLinkWrapper,
};
