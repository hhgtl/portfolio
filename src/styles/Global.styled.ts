import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const Globalstyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
  margin: 0;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${theme.color.primariBg};
  line-height: 1.2;
  min-width: 360px;
}

section {
  margin-bottom: 180px;
  @media ${theme.media.tablet} {
    margin-bottom: 50px;
  }
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
}
`;
