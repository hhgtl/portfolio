import iconsSprite from '../../asests/img/icons-sprite.svg';

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || '120.000000'}
      height={props.height || '120.000000'}
      viewBox={props.viewBox || '0 0 120 120'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};

export default Icon;
