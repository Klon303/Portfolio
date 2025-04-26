import React from 'react';
import styled from 'styled-components';

export const Menu = () => {
    return (
        <Styledmenu>
        <ul>
            <li><a href="">Projects</a></li>
            <li><a href="">Technologies</a></li>
            <li><a href="">About me</a></li>
        </ul>
    </Styledmenu>
    );
}

const Styledmenu = styled.nav`
ul {
display:flex;
gap:30px;
}
`

