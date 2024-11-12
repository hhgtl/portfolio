import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import Icon from '../../../components/icon/Icon';

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle
        title="My Tech Stack"
        description="Technologies I’ve been working with recently"
      />

      <IconWrapper>
        <Icon iconId="html" />
        <Icon iconId="css" />
        <Icon iconId="javascript" />
        <Icon iconId="react" />
        <Icon iconId="redux" />
        <Icon iconId="bootstrap" />
        <Icon iconId="tailwind" />
        <Icon iconId="sass" />
        <Icon iconId="git" />
        <Icon iconId="greensock" />
        <Icon iconId="vscode" />
        <Icon iconId="githubWhite" />
      </IconWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  height: 100vh;
`;

const IconWrapper = styled.div`
  margin: 0 auto;
  max-width: 1224px;
  gap: 70px 84px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
