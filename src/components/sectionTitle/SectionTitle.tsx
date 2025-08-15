import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { Font } from "../../styles/Common";

type SectionTitlePropsType = {
  sectionTitle: string;
  description?: string;
};

export const SectionTitle = (props: SectionTitlePropsType) => {
  return (
    <div>
      <StyledSectionTitle>
        {props.sectionTitle}
        <h3>{props.description}</h3>
      </StyledSectionTitle>
    </div>
  );
};

const StyledSectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 90px;

  ${Font({
    letterSpacing: "0px",
    family: "Poppins",
    weight: 700,
    color: `${Theme.colors.fontSectionMain}`,
    Fmax: 48,
    Fmin: 32,
  })}

  h3 {
    ${Font({
      weight: 400,
      color: `${Theme.colors.fontSection}`,
      Fmax: 32,
      Fmin: 20,
    })}
  }
`;
