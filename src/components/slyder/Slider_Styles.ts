import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const Slider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slide = styled.div`
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
`;

const Name = styled.span`
  font-family: Dm Sans, sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${Theme.colors.fontMain};
  margin: 22px 0 22px;
  display: inline-block;
`;

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    transition: 0.2 ease-in-out;

    background-color: ${Theme.colors.accent2};
    opacity: 0.7;
    border-radius: 50%;

    & + span {
      margin-left: 5px;
    }

    &.active {
      background-color: ${Theme.colors.accent1};
      width: 20px;
      border-radius: 20%;
    }
  }
`;

export const S = {
  Slider,
  Slide,
  Text,
  Name,
  Pagination,
};
