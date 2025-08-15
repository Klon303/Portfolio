import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Theme } from "../../../styles/Theme";
import { Link } from "../../../components/Link";
import { Button } from "../../../components/Button";

// tabMenu

const TabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    width: 100%;
    margin: 0 auto 40px;
  }
`;

const ListItem = styled.li``;

// Works

const Works = styled.section`
  position: relative;
  min-height: 50vh;
  background-color: #c5b6d3;
  ${FlexWrapper} {
    gap: 48px;
  }
  @media ${Theme.media.sliderWorks} {
    ${TabMenu} {
      display: none;
    }
  }
`;

// Work

const Description = styled.div`
  padding: 30px 30px;
  min-height: 210px;
`;

const Work = styled.div`
  background-color: ${Theme.colors.bacCard};
  border-radius: 5%;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 80px;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    transition: ${Theme.animation.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    border-radius: 5% 5% 0 0;
    opacity: 0;
    transition: ${Theme.animation.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }

  @media ${Theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 5% 5% 0 0;
`;

const Title = styled.h3``;

const Text = styled.p`
  margin: 14px 0 10px;
`;

// SliderWorks

const Slider = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const S = {
  Works,
  Description,
  Work,
  ImageWrapper,
  Image,
  Title,
  Text,
  ListItem,
  TabMenu,
  Slider,
};
