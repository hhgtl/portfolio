import React from 'react';
import styled from 'styled-components';
import Icon from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';

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
        <div>
          <Icon iconId="linkChain" width="20" height="20" viewBox="0 0 20 20" />
          <Link href="#">Live Preview</Link>
        </div>
        <div>
          <Icon iconId="githubWhite" width="28" height="28" />
          <Link href="#">View Code</Link>
        </div>
      </LinkWrapper>
    </StyledProjectItem>
  );
};

const StyledProjectItem = styled.div`
  max-width: 374px;
  height: 100%;
  max-height: 568px;
  background-color: #363636;
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Title = styled.h3`
  color: #cccccc;
  font-family: Poppins;
  font-size: 28px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
`;

const Description = styled.p`
  color: #cccccc;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  text-align: center;
`;

const TechStack = styled.p`
  text-align: center;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 48px;
    svg {
      margin-right: 4px;
    }
  }
`;

const Link = styled.a`
  color: #ffffff;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;
