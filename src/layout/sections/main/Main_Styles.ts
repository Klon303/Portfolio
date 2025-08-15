import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import abstract from "./../../../assets/images/Abstract.png";
import { Font } from "../../../styles/Common";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Fon2 = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: -35%;
    top: -35%;
    right: 0;
    height: 600px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${abstract});
  }
  @media ${Theme.media.tablet} {
    &::after {
      left: -35%;
      top: 10%;
    }
  }
`;

const SmallText = styled.h2`
  ${Font({
    letterSpacing: "-1px",
    family: "Poppins",
    weight: 700,
    color: `${Theme.colors.fontMain}`,
    lineHeight: "70px",
    Fmax: 50,
    Fmin: 32,
  })}
  @media ${Theme.media.mobile} {
    line-height: 50px;
    margin-top: 30px;
  }
`;

const Name = styled.h2`
  ${Font({
    letterSpacing: "-1px",
    family: "Poppins",
    weight: 700,
    color: "transparent",
    lineHeight: "70px",
    Fmax: 50,
    Fmin: 32,
  })}
  white-space: nowrap;
  @media ${Theme.media.mobile} {
    line-height: 50px;
  }
`;

const MainTitle = styled.h1`
  ${Font({
    letterSpacing: "-1px",
    family: "Poppins",
    weight: 700,
    color: `${Theme.colors.fontMain}`,
    lineHeight: "70px",
    Fmax: 50,
    Fmin: 32,
  })};
  position: absolute;

  p {
    display: none;
  }

  @media ${Theme.media.mobile} {
    line-height: 50px;
  }
`;

const Photo = styled.img`
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 349px;
  height: 349px;
  border-radius: 50%;
  object-fit: cover;
  border: double 1em transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(${Theme.colors.accent1}, ${Theme.colors.accent2});
  background-origin: border-box;
  background-clip: content-box, border-box;

  @media ${Theme.media.tablet} {
    margin-top: 180px;
  }

  @media ${Theme.media.mobile} {
    width: 310px;
    height: 310px;
  }
`;

const Main = styled.section`
  display: flex;
  min-height: 100vh;
  letter-spacing: -1px;
  @media ${Theme.media.tablet} {
    & ${FlexWrapper}:first-child {
      flex-direction: column;
    }
  }
`;

export const S = {
  Main,
  Photo,
  MainTitle,
  Name,
  SmallText,
  Fon2,
};
