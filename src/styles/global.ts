import { createGlobalStyle } from 'styled-components';

import theme from './theme';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body,html {
        background: ${({ theme }) => theme.background};
    }

    img {
        width: 100%;
        max-width: 100%;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        &:visited {
            color: initial;
        }
    }

    footer {
        background-color: ${({ theme }) => theme.primary};
        color: white;
        padding: .25rem 0;
        text-align: center;
        font-size: 0.8rem;
    }

    .expand{
        position:relative;
        text-decoration:none;
        display:inline-block;

    
        &:after {
            display:block;
            content: '';
            border-bottom: solid 0.15rem ${({theme}) => theme.primary};  
            transform: scaleX(0);  
            transition: transform 250ms ease-in-out;
            transform-origin:100% 50%

        }

        &:hover:after { 
            transform: scaleX(1);
            transform-origin:0 50%;
        }
    }

    .container {
        width: 100%;
        margin: 0 auto;
        max-width: 85rem;
        padding: 0 1rem;

        @media(max-width:1450px) {
            max-width: 70rem;
        }
        @media(max-width:1000px) {
            max-width: 50rem;
        }
        @media(max-width:700px) {
            padding: 0 2rem;
        }
    }

`;