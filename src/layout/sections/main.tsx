import styled from "styled-components";
import photo from  "../../assets/images/main.webp";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"start"} >
        <Blockwrapper>
            <div>
            <h1>Frontend-developer Igor Maer</h1>
           <span>I'm frontend developer with experience in creating SPA using React, Redux, redux-Toolkit, Axios, React-Router-Dom, TypeScript, JavaScript, SCSS, HTML. I am enthusiastic team player focused on personal growth. Now I am improving my skills in this direction and expanding them with new technologies.</span> 
           </div>
            <a><button>Let’s Begin</button></a>
        </Blockwrapper>
        <Photo src={photo} alt="Photo" />
        </FlexWrapper>
        </StyledMain>
    );
}

const StyledMain =styled.div `
background-color:#0F1624;
color:white;
`

const Blockwrapper =styled.div `
max-withd: 300px;
`

const Photo =styled.img `   
withd: 450px;
height: 380px;
object-fit: cover
`