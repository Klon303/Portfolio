import { Icons } from './icons';
import styled from 'styled-components';

export const IconBar = () => {
    return (
            <SocialIconList>
               <SocialIconlink href="#"> <Icons iconsId={"Github"} /></SocialIconlink>
                <SocialIconlink href="#"> <Icons iconsId={"Linkedin"} /></SocialIconlink>
                <SocialIconlink href="#"> <Icons iconsId={"Telegramm"} /></SocialIconlink>
            </SocialIconList>
    );
}

const SocialIconList =styled.ul`
`

const SocialIconlink =styled.a`
`
