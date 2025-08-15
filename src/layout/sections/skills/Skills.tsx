import { S } from "./Skills_Styles";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Container } from "../../../components/Container";
import { Fade } from "react-awesome-reveal";
import { SkillData } from "./consts";

export const Skills = () => {
  return (
    <S.Skills id={"tech stack"}>
      <Container>
        <SectionTitle
          sectionTitle="My Tech Stack"
          description="Technologies I've been working with recentl"
        />
        <FlexWrapper wrap={"wrap"} justify={"space-around"}>
          <Fade cascade={true} damping={0.2} triggerOnce={true}>
            {SkillData.map((s, index) => {
              return (
                <Skill
                  iconId={s.iconId}
                  key={index}
                  title={s.title}
                  viewBox={s.viewBox}
                />
              );
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
