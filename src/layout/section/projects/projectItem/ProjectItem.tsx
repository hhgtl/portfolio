import React from 'react';
import { LinkProject } from './linkProject/LinkProject';
import { S } from './ProjectItem_Styled';

type ImageType = {
  src: string;
  alt: string;
};

type ProjectItemPropsType = {
  image: ImageType;
};

export const ProjectItem = (props: ProjectItemPropsType) => {
  return (
    <S.ProjectItem>
      <S.Image src={props.image.src} alt={props.image.alt} />
      <S.Title>Project Tile goes here</S.Title>
      <S.Description>
        This is sample project description random things are here in description This is sample
        project lorem ipsum generator for dummy content
      </S.Description>
      <S.TechStack>
        <span>Tech stack :</span> HTML , JavaScript, SASS, React
      </S.TechStack>
      <S.LinkWrapper>
        <LinkProject
          iconId="linkChain"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          linkText="Live Preview"
        />
        <LinkProject iconId="githubWhite" width="32" height="32" linkText="View Code" />
      </S.LinkWrapper>
    </S.ProjectItem>
  );
};
