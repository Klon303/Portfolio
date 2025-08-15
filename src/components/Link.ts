import { Theme } from "./../styles/Theme";
import styled, { css } from "styled-components";

export const Link = styled.a<{ active?: boolean }>`
  position: relative;
  z-index: 0;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;

  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    background-color: ${Theme.colors.accent1};

    position: absolute;
    z-index: -1;
    bottom: 1px;
    left: 0;
    right: 0;
    height: 0;
    transition: ${Theme.animation.transition};

    ${(props) =>
      props.active &&
      css<{ active?: boolean }>`
        height: 10px;
      `}
  }
`;
