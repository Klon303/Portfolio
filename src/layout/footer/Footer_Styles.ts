import { Container } from "./../../components/Container";
import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { Font } from "../../styles/Common";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Accent } from "../../components/accent";

const Footer = styled.footer`
  position: relative;
  background-color: ${Theme.colors.primaryBg};
  padding: 100px 0;

  color: ${Theme.colors.fontSection};
  font-family: DM Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0px;

  .wrapper {
    display: flex;
  }

  ${Container} {
    position: relative;
    &::before {
      content: "";
      display: inline-block;
      background-color: ${Theme.colors.fontSection};
      opacity: 0.3;
      height: 1px;
      width: 100%;

      position: absolute;
      bottom: 45%;
      left: 50%;

      transform: translate(-50%);
    }

    @media ${Theme.media.tablet} {
      ${FlexWrapper}:nth-child(1) {
        flex-direction: column;
      }
    }
  }

  ${FlexWrapper} + ${FlexWrapper} {
    margin-top: 60px;
  }
`;

const Name = styled.span`
  ${Font({
    weight: 400,
    Fmax: 18,
    Fmin: 14,
  })}
  margin-left: 60px;
  margin-right: 50px;
  @media ${Theme.media.mobile} {
    margin-left: 20px;
    margin-right: 0px;
  }
`;

const NumberPhone = styled.a`
  position: relative;

  ${Font({
    weight: 400,
    Fmax: 18,
    Fmin: 14,
  })}

  &::before {
    content: "📱";
    position: absolute;
    left: -30px;
    top: 8px;
  }
`;

const Copyright = styled.small`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  ${Accent} {
    color: transparent;
    padding-left: 2px;
    padding-right: 2px;
  }
`;

export const S = {
  Footer,
  Name,
  NumberPhone,
  Copyright,
};
