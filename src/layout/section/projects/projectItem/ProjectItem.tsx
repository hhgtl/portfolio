import React from 'react';
import { LinkProject } from './linkProject/LinkProject';
import { S } from './ProjectItem_Styled';
import {ProjectType} from "../Projects";

type Props = {
    project: ProjectType;
};

export const ProjectItem = ({project}: Props) => {
    const { image, previewLink, codeLink, title, tech, desc } = project
  return (
    <S.ProjectItem>
      <S.Image src={image.src} alt={image.alt} />
      <S.Title>{title}</S.Title>
      <S.Description>
          {desc}
      </S.Description>
      <S.TechStack>
        <span>Tech stack :</span> {tech}
      </S.TechStack>
      <S.LinkWrapper>
        <LinkProject
          iconId="linkChain"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          linkText="Live Preview"
          link={previewLink}
        />
        <LinkProject link={codeLink} iconId="githubWhite" width="32" height="32" linkText="View Code" />
      </S.LinkWrapper>
    </S.ProjectItem>
  );
};
