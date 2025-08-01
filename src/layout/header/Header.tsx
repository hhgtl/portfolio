import React, {useEffect, useState} from 'react';
import { Menu } from '../../components/menu/Menu';
import { SocialLink } from '../../components/socialLink/SocialLink';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import Icon from '../../components/icon/Icon';
import { Link } from '../../components/Link/Link';
import { MobileMenu } from './MobileMenu';
import { S } from './Header_Styled';

export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center" gap="50px">
          <Link href="#home">
            <Icon iconId="logo" width="300px" height="60px" viewBox="0 0 97 60" />
          </Link>
          <FlexWrapper gap="50px">
            {width <= breakpoint ? <MobileMenu /> : <Menu />}

            <S.SocialLinkWrapper>
              <SocialLink />
            </S.SocialLinkWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
