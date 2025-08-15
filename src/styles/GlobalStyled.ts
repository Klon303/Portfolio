import { Theme } from "./Theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: 'Poppins' -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-width: 360px;
        width: 100%;
    }

    a {
        text-decoration: none;
        color: ${Theme.colors.fontMain};
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${Theme.colors.fontMain};
    }

    .App section {
        padding: 100px 0 0 0;
        background-color: ${Theme.colors.primaryBg};

        @media ${Theme.media.mobile} {
            padding: 80px 0 0 0;
        }
    }
    
    h3 {
        color: ${Theme.colors.fontSectionMain};
        font-family: Poppins;
        font-size: 28px;
        letter-spacing: 0px;
        text-align: center;
        font-weight: 500;
    }

    p {
        color: ${Theme.colors.fontSectionMain};
        font-family: Poppins;
        font-size: 18px;
        font-weight: 300;
        line-height: 26px;
        letter-spacing: 0px;
        text-align: left;
    }
`;
