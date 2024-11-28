import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { LinkProject } from './linkProject/LinkProject';
import { font } from '../../../../styles/Common';

type ImageType = {
  src: string;
  alt: string;
};

type ProjectItemPropsType = {
  image: ImageType;
};

export const ProjectItem = (props: ProjectItemPropsType) => {
  return (
    <StyledProjectItem>
      <Image src={props.image.src} alt={props.image.alt} />
      <Title>Project Tile goes here</Title>
      <Description>
        This is sample project description random things are here in description This is sample
        project lorem ipsum generator for dummy content
      </Description>
      <TechStack>
        <span>Tech stack :</span> HTML , JavaScript, SASS, React
      </TechStack>
      <LinkWrapper>
        <LinkProject
          iconId="linkChain"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          linkText="Live Preview"
        />
        <LinkProject iconId="githubWhite" width="32" height="32" linkText="View Code" />
      </LinkWrapper>
    </StyledProjectItem>
  );
};

const StyledProjectItem = styled.div`
  max-width: 374px;
  min-height: 548px;
  height: 100%;

  background-color: #363636;
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 820px) {
    max-width: 674px;
    min-height: 520px;
  }
  @media ${theme.media.mobile} {
    min-height: 478px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  margin-bottom: 26px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const Title = styled.h3`
  color: ${theme.color.primaryFont};
  font-family: Poppins;
  font-size: 28px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  margin-bottom: 18px;
  @media ${theme.media.mobile} {
    ${font({ Fmax: 28, Fmin: 20, weight: 500, color: '#cccccc' })}
  }
`;

const Description = styled.p`
  padding: 8px;
  color: ${theme.color.primaryFont};
  font-family: Poppins;
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  text-align: center;
  margin-bottom: 12px;
  @media ${theme.media.mobile} {
    ${font({ Fmax: 18, Fmin: 12, weight: 300, color: theme.color.primaryFont })}
  }
`;

const TechStack = styled.p`
  text-align: center;
  margin-bottom: 20px;
  color: ${theme.color.primaryFont};
  font-size: 14px;
  font-weight: 300;
  span {
    font-weight: 400;
    font-size: 18px;
    @media ${theme.media.mobile} {
      ${font({ Fmax: 18, Fmin: 12, weight: 400, color: theme.color.primaryFont })}
    }
  }
  @media ${theme.media.mobile} {
    ${font({ Fmax: 14, Fmin: 10, weight: 300, color: theme.color.primaryFont })}
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-bottom: 24px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-right: 4px;
    }
  }
  div + div svg {
    use {
      y: 18;
    }
  }
`;
