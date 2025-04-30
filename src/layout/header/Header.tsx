import styled from 'styled-components';
import { Logo } from '../../components/logo/logo';
import { Menu } from '../../components/menu/menu';
import IconBar from '../../components/icons/icon-bar';

export const Header = () => {
    return (
        <Styledheader>
            <Logo />
            <Menu />
            <IconBar />
        </Styledheader>       
    );
}
        
const Styledheader = styled.header `
background-color:#0F1624;
display:flex;
justify-content: space-between;
` 
