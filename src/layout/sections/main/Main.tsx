import { S } from "./Main_Styles";
import main from "./../../../assets/images/main.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Accent } from "../../../components/accent";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

export const Main: React.FC = () => {
  return (
    <S.Main id="home">
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap="wrap">
          <Accent>
            <S.SmallText>Hi, My name is</S.SmallText>
            <S.Name>Igor Maer</S.Name>
            <S.MainTitle>
              <p>A Frontend Developer</p>
              <Typewriter
                options={{
                  strings: ["A Frontend Developer", "A Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.MainTitle>
          </Accent>
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <FlexWrapper justify="center" align="center">
              <S.Fon2>
                <S.Photo src={main} />
              </S.Fon2>
            </FlexWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
