import { Icons } from './icons';
import { FlexWrapper } from '../FlexWrapper';

const IconBar = () => {
    return (
        <FlexWrapper>
            <Icons iconsId={"Telegramm"} />
            <Icons iconsId={"Linkedin"} />
            <Icons iconsId={"Github"} />
        </FlexWrapper>
    );
}

export default IconBar;
