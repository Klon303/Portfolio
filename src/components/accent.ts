import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const Accent = styled.div`
  background-image: linear-gradient(
    to right,
    ${Theme.colors.accent1} 35%,
    ${Theme.colors.accent2}
  );
  -webkit-background-clip: text;
`;
