import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";


const MeSkills = ["Html", "Css, Sass", "React", "Styled components"]

export const Skills = (props:  {Skillitem: Array<string> }) => {
    return (
<SectionSkills>
    <FlexWrapper direction="row">
 {
    props.Skillitem.map((item :string)=>{
        return <span>{item}</span>
    })
 }
    </FlexWrapper>
    </SectionSkills>
    );
}

const SectionSkills = styled.div



