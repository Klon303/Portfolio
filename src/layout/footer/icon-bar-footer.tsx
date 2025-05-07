import { Icons } from '../../components/icons/icons';
import styled from 'styled-components';

export const FooterIconBar = () => {
    return (
            <SocialIconList>
                <SocialIconlink href="#"><SocialIconItem> <Icons iconsId={"Github"} width={"35px"} height={"35px"} /></SocialIconItem></SocialIconlink>
                <SocialIconlink href="#"><SocialIconItem> <Icons iconsId={"Linkedin"} width={"35px"} height={"35px"} /> </SocialIconItem></SocialIconlink>
                <SocialIconlink href="#"><SocialIconItem> <Icons iconsId={"Telegramm"} width={"35px"} height={"35px"} /></SocialIconItem></SocialIconlink>
            </SocialIconList>
    );
}

const SocialIconList =styled.ul`
`

const SocialIconItem =styled.li`
`

const SocialIconlink =styled.a`
`

