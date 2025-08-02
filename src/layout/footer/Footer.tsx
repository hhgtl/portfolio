import Icon from '../../components/icon/Icon';
import { SocialLink } from '../../components/socialLink/SocialLink';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';
import { Menu } from '../../components/menu/Menu';
import { S } from './Footer_Styled';
import { Link } from '../../components/Link/Link';
import { ContactItemsWrapper } from '../../components/ContactItemWrapper/ContactItemsWrapper';
import React, {useEffect, useState} from 'react';

export const Footer= () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <S.Footer>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <ContactItemsWrapper />
          <Icon iconId="logo" width="300px" height="60px" viewBox="0 0 97 60" />
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
