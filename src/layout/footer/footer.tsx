import { FlexWrapper } from '../../components/FlexWrapper';
import { FooterIconBar } from './icon-bar-footer';

export const Footer = () => {
    return (
        <FlexWrapper justify={'space-between'} align={'center'}>
            <span>Call me:<br></br> <a href="tel:+375336546407">+375336546407</a></span>
            <span>email:<br></br><a href="mailto:igor.son303@yandex.by">igor.son303@yandex.by</a></span>
       <FooterIconBar />
        </FlexWrapper>
    );
}


