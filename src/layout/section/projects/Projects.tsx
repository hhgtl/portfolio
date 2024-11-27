import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { ProjectItem } from './projectItem/ProjectItem';
import project_1 from '../../../asests/img/project_1.png';
import project_2 from '../../../asests/img/project_2.png';
import project_3 from '../../../asests/img/project_3.png';
import project_4 from '../../../asests/img/project_4.png';
import project_5 from '../../../asests/img/project_5.png';
import project_6 from '../../../asests/img/project_6.png';
import { Container } from '../../../components/Container';

export const Projects = () => {
  const imagesSrc = [
    { src: project_1, alt: 'project_1' },
    { src: project_2, alt: 'project_2' },
    { src: project_3, alt: 'project_3' },
    { src: project_4, alt: 'project_4' },
    { src: project_5, alt: 'project_5' },
    { src: project_6, alt: 'project_6' },
  ];

  return (
    <StyledProjects>
      <Container>
        <SectionTitle marginBottom={110} title="Projects" description="Things I’ve built so far" />
        <FlexWrapper wrap="wrap" justify="space-evenly" gap="65px 25px">
          {imagesSrc.map((srcObj, i) => (
            <ProjectItem image={srcObj} key={i} />
          ))}
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  margin-bottom: 180px;
  @media screen and (max-width: 800px) {
    ${FlexWrapper} {
      justify-content: center;
      row-gap: 35px;
    }
  }
`;
