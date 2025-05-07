import styled from 'styled-components';
import { Logo } from '../../components/logo/logo';
import { Menu } from '../../components/menu/menu';
import { IconBar } from '../../components/icons/icon-bar';
import { Container } from '../../styles/Container';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Header = () => {
    return (
        <Styledheader>
            <Container>
                <FlexWrapper justify='space-between'>
            <Logo />
            <Menu />
            <IconBar />
            </FlexWrapper>
            </Container>
        </Styledheader>       
    );
}
        
const Styledheader = styled.header `
background-color:#0F1624;
` 
