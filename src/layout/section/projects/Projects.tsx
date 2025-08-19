import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { ProjectItem } from './projectItem/ProjectItem';
import todolist from '../../../asests/img/projects/todo-list.png';
import CounterWithRedux from '../../../asests/img/projects/counter-with-redux.png';
import MyPin from '../../../asests/img/projects/my-pin.png';
import { Container } from '../../../components/Container';

export type ProjectType = {
    title: string
    desc: string
    tech: string
    image: {
        src: string
        alt: string
    }
    previewLink: string
    codeLink: string
}

export const Projects = () => {
  const projects: ProjectType[] = [
    { title: "Task tracker", desc: "Task Tracker - веб-застосунок для ефективного управління завданнями. Користувачі можуть створювати, редагувати та відстежувати задачі, змінювати їхні статуси та пріоритети. Реалізована повноцінна авторизація через логін і пароль, що дозволяє персоналізувати робочий простір.", tech: 'HTML, CSS, JavaScript, TypeScript, React, Redux toolkit, Material UI, React Hook Form, Zod', image: {src: todolist, alt: 'todolist image'}, previewLink: 'https://hhgtl.github.io/todo-list/', codeLink: 'https://github.com/hhgtl/todo-list' },
    { title: "Counter with redux", tech: 'HTML, CSS, JavaScript, TypeScript, React, Redux toolkit', desc: "Counter with Redux - лічильник, який дозволяє встановлювати мінімальне та максимальне значення. Користувачі можуть збільшувати або зменшувати число, але кнопки автоматично блокуються, якщо значення досягло встановлених меж. Стан застосунку керується через Redux Toolkit, демонструючи роботу з глобальним станом у React.", image: {src: CounterWithRedux, alt: 'CounterWithRedux image'}, previewLink: 'https://hhgtl.github.io/counter-with-redux/', codeLink: 'https://github.com/hhgtl/counter-with-redux' },
    { title: "MY PIN", desc: "My PIN - веб-застосунок на кшталт Pinterest для організації та перегляду зображень. Користувачі можуть переглядати картинки, натискаючи на них для перегляду заголовку та опису, фільтрувати за тегами, створювати дошки та зберігати у них зображення. Реалізована можливість завантаження фотографій, обрізки під формат, накладення фільтрів, а також додавання заголовку, опису та тегів для кожної картинки.", tech: 'HTML, CSS, JavaScript, TypeScript, React, Redux toolkit, React Router Dom', image: {src: MyPin, alt: 'MyPin image'}, previewLink: 'https://hhgtl.github.io/photo-gallery/', codeLink: 'https://github.com/hhgtl/photo-gallery' },
  ];

  return (
    <StyledProjects id={'projects'}>
      <Container>
        <SectionTitle marginBottom={110} title="Projects" description="" />
        <FlexWrapper wrap="wrap" justify="space-evenly" gap="65px 25px">
          {projects.map((project, i) => (
            <ProjectItem project={project} key={i} />
          ))}
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  @media screen and (max-width: 800px) {
    ${FlexWrapper} {
      justify-content: center;
      row-gap: 35px;
    }
  }
`;
