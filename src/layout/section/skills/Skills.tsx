import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import Icon from '../../../components/icon/Icon';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle
          marginBottom="100px"
          title="My Tech Stack"
          description="Technologies I’ve been working with recently"
        />

        <FlexWrapper justify="center" wrap="wrap" gap="70px 84px">
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
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  margin-bottom: 215px;
`;
