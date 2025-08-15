import styled from "styled-components";
import { Font } from "../../../styles/Common";
import { Theme } from "../../../styles/Theme";
import { Button } from "../../../components/Button";

const SloganTitle = styled.h2`
  ${Font({
    letterSpacing: "0px",
    family: "Poppins",
    weight: 700,
    color: `${Theme.colors.fontSectionMain}`,
    lineHeight: "70px",
    Fmax: 48,
    Fmin: 32,
  })}
  text-align: center;
`;

const Slogan = styled.section`
  min-height: 30vh;
`;

const ButtonWrapper = styled.div`
  ${Button} {
    &:hover {
      &::before {
        height: 10px;
        width: 50%;
      }
    }
    ${Font({
      letterSpacing: "-1px",
      family: "DM San, sans-serif",
      weight: 700,
      color: "transparent",
      lineHeight: "70px",
      Fmax: 44,
      Fmin: 32,
    })}

    text-transform: lowercase;
    height: 100px;
    max-width: 570px;
    width: 100%;
    background: linear-gradient(
      to right,
      ${Theme.colors.accent1} 3%,
      ${Theme.colors.accent2}
    );
    -webkit-background-clip: text;
  }
`;

export const S = {
  SloganTitle,
  Slogan,
  ButtonWrapper,
};
