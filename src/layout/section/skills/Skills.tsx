import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import Icon from '../../../components/icon/Icon';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';

export const Skills = () => {
  const iconsId = [
    'html',
    'css',
    'javascript',
    'react',
    'redux',
    'bootstrap',
    'tailwind',
    'sass',
    'git',
    'greensock',
    'vscode',
    'githubWhite',
  ];
  return (
    <StyledSkills>
      <Container>
        <SectionTitle
          marginBottom={100}
          title="My Tech Stack"
          description="Technologies I’ve been working with recently"
        />

        <FlexWrapper justify="center" wrap="wrap" gap="70px 84px">
          {iconsId.map((iconId, i) => (
            <Icon iconId={iconId} key={i} />
          ))}
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;
