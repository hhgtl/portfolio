import styled from 'styled-components';
import { font } from '../../../styles/Common';
import { theme } from '../../../styles/Theme';

const Contact = styled.section`
  text-align: center;
`;

const Title = styled.h3`
  line-height: 70px;
  ${font({ Fmax: 50, Fmin: 28, weight: 700, color: theme.color.primaryFont, family: 'DM Sans' })}
`;

const Adress = styled.h3`
  ${font({ Fmax: 58, Fmin: 28, weight: 700, color: 'transparent', family: 'DM Sans' })}
  background-image: linear-gradient(90deg, #13b0f5, #e70faa);
  -webkit-background-clip: text;
`;

export const S = {
  Contact,
  Title,
  Adress,
};
