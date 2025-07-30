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
  const breakpoint = 1100;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <S.Footer>
      <Container>
        <S.MarginFlexWrapper justify="space-between" wrap="wrap" gap="12px">
          <Link href="#">
            <Icon iconId="logo" width="97px" height="60px" viewBox="0 0 97 60" />
          </Link>
          <S.ContactWrapper>
            <ContactItemsWrapper />
            <SocialLink />
          </S.ContactWrapper>
        </S.MarginFlexWrapper>
        <FlexWrapper justify="space-between" align="center">
          {breakpoint <= width && <Menu fontSize="18px" fontWeight="400" width="554px" />}
          <S.CreditsText>
            Designed and built by{' '}
            <S.GradientText>
              Pavan MG <span>with</span> Love <span>&</span> Coffee
            </S.GradientText>
          </S.CreditsText>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
