import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const Button = styled.button`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;

  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 100%;
      width: 100%;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    background-color: ${Theme.colors.accent1};
    height: 10px;
    width: 50%;
    transition: ${Theme.animation.transition};

    position: absolute;

    bottom: 0;
    left: 50%;
    z-index: -1;
    transform: translate(-50%);
  }
`;
