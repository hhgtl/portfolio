import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import Icon from '../../../components/icon/Icon';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import {S} from './Skills_Styled';

export const Skills = () => {
  const icons = [
    { iconId: 'html',         value: 'HTML' },
    { iconId: 'css',          value: 'CSS' },
    { iconId: 'javascript',   value: 'JavaScript' },
    { iconId: 'typescript',   value: 'TypeScript' },
    { iconId: 'react',        value: 'React' },
    { iconId: 'nextJs',       value: 'NextJs' },
    { iconId: 'redux',        value: 'Redux Toolkit' },
    { iconId: 'materialUi',   value: 'Material‑UI' },
    { iconId: 'sass',         value: 'Sass' },
    { iconId: 'hookForm',     value: 'React Hook Form' },
    { iconId: 'zod',          value: 'Zod' },
    { iconId: 'git',          value: 'Git' },
    { iconId: 'vscode',       value: 'VS Code' },
    { iconId: 'webStorm',     value: 'WebStorm' },
    { iconId: 'githubWhite',  value: 'GitHub' },
  ];

  return (
    <StyledSkills id={'tech'}>
      <Container>
        <SectionTitle
          marginBottom={100}
          title="My Tech Stack"
          description="Технології, з якими я працював останнім часом"
        />

        <FlexWrapper justify="center" wrap="wrap" gap="70px 84px">
          {icons.map(({iconId, value}, i) => (
            <S.Container>
              <Icon iconId={iconId} key={i} />
              <S.Title>{value}</S.Title>
            </S.Container>
          ))}
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;
