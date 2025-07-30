import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h3`
    line-height: 70px;
    text-transform: capitalize;
    margin-top: 10px;
  ${font({ Fmax: 25, Fmin: 22, weight: 700, color: theme.color.primaryFont, family: 'DM Sans' })}
`;

export const S = {
    Title,
    Container
};
