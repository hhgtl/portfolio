import React from 'react';
import Icon from '../../../../../components/icon/Icon';
import styled from 'styled-components';

type LinkProjectPropsType = {
  iconId: string;
  width: string;
  height: string;
  linkText: string;
  viewBox?: string;
};

export const LinkProject: React.FC<LinkProjectPropsType> = (props: LinkProjectPropsType) => {
  return (
    <LinkProjectStyled>
      <Icon
        iconId={props.iconId}
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
      />
      <Link href="#">{props.linkText}</Link>
    </LinkProjectStyled>
  );
};

const LinkProjectStyled = styled.div``;

const Link = styled.a`
  color: #ffffff;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-decoration: underline;
`;
