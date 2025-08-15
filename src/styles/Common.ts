import { Theme } from "./Theme";
type FontPropsType = {
  family?: string;
  weight?: number;
  color?: string;
  letterSpacing?: string;
  lineHeight?: string;
  Fmin?: number;
  Fmax?: number;
};

export const Font = ({
  letterSpacing,
  family,
  weight,
  color,
  lineHeight,
  Fmax,
  Fmin,
}: FontPropsType) => `
    letter-spacing: ${letterSpacing};
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || Theme.colors.fontSection};
    line-height: ${lineHeight};
    font-size: calc( (100vw  - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;
