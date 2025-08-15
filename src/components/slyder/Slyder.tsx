import { S } from "./Slider_Styles";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./../../styles/Slider.css";

type SlidePropsType = {
  text: string;
  userName: string;
};

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <S.Text>{props.text}</S.Text>
      <S.Name>{props.userName}</S.Name>
    </S.Slide>
  );
};

const items = [
  <Slide
    userName={"@Pavel1998"}
    text={
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam incidunt eos nisi, repudiandae animi impedit fugiat quasi, corrupti ipsum adipisci hic obcaecati, labore totam nam dolorum voluptate aut qui."
    }
  />,

  <Slide
    userName={"@Petr Petrov"}
    text={
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam incidunt eos nisi, repudiandae animi impedit fugiat quasi, corrupti ipsum adipisci hic obcaecati, labore totam nam dolorum voluptate aut qui."
    }
  />,

  <Slide
    userName={"@Dmitriy Nesteryk"}
    text={
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam incidunt eos nisi, repudiandae animi impedit fugiat quasi, corrupti ipsum adipisci hic obcaecati, labore totam nam dolorum voluptate aut qui."
    }
  />,
];

export const Slider: React.FC = () => {
  return (
    <S.Slider>
      <AliceCarousel mouseTracking items={items} />;
    </S.Slider>
  );
};
