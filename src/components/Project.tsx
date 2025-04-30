import styled from "styled-components";
import photoproject from "../assets/images/block.webp";

type ProjectPropsType = {
 NameProject: string
 Title: string
}

export const Project = (props:ProjectPropsType) => {
    return (
        <ProjectWrapper>
            <Photoproject src={photoproject} alt="" />
            <ProjectName>{props.NameProject}</ProjectName>
            <ProjectTitle>{props.Title}</ProjectTitle>
            <ProjectLink>Look It Up</ProjectLink>
        </ProjectWrapper>
    );
}

const ProjectWrapper = styled.div`
witdh: 40%;
`

const ProjectName = styled.h3`
`
const ProjectTitle = styled.p`
`

const ProjectLink = styled.a`
`

const Photoproject= styled.img`
`

