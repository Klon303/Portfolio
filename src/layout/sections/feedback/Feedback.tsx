import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slyder/Slyder";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "../skills/Skills_Styles";
import { Container } from "../../../components/Container";

export const Feedback: React.FC = () => {
  return (
    <StyledFeedback id="feedback">
      <Container>
        <SectionTitle sectionTitle="Feedback" />
        <FlexWrapper direction={"column"} align={"center"}>
          <S.IconWrapper>
            <Icon iconId="feedback" viewBox="0 0 64 64" />
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledFeedback>
  );
};

const StyledFeedback = styled.section`
  position: relative;
  min-height: 50vh;

  ${S.IconWrapper} {
    margin: 20px 0 72px;
  }
`;
