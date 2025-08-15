import IconSprite from "./../../assets/images/code-svg.svg";

type iconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  color?: string;
};

export const Icon: React.FC<iconPropsType> = (props: iconPropsType) => {
  return (
    <svg
      width={props.width || "70"}
      height={props.height || "70"}
      viewBox={props.viewBox || "0 0 120 120"}
      color={props.color || "red"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${IconSprite}#${props.iconId}`} />
    </svg>
  );
};
