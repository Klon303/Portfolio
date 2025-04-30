import styled from "styled-components";
import { Project } from "../../components/project";
import {SectionTitle } from "../../components/SectionTitle"
import { FlexWrapper } from "../../components/FlexWrapper";

export const Projects = () => {
    return (
        <ProjectsSection>
            <SectionTitle>Projects</SectionTitle>
        
        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
        <Project NameProject={"PROJECT 1"} Title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
        <Project NameProject={"PROJECT 2"} Title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
        <Project NameProject={"PROJECT 3"} Title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
        <Project NameProject={"PROJECT 4"} Title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
        </FlexWrapper>
        </ProjectsSection>
    );
}

const ProjectsWrapper= styled.div`
`
const ProjectsSection= styled.div`
`

