import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/logo';
import { Menu } from '../../components/menu/menu';

export const Header = () => {
    return (
        <Styledheader>
            <Logo />
            <Menu />
        </Styledheader>       
    );
}
        
const Styledheader = styled.header `
background-color:green;
display:flex;
justify-content: space-between;
` 
