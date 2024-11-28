import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { LinkProject } from './linkProject/LinkProject';

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
  height: 100%;
  min-height: 548px;
  background-color: #363636;
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  margin-bottom: 26px;
`;

const Title = styled.h3`
  color: #cccccc;
  font-family: Poppins;
  font-size: 28px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  margin-bottom: 18px;
`;

const Description = styled.p`
  color: #cccccc;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  text-align: center;
  margin-bottom: 12px;
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
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 48px;
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
