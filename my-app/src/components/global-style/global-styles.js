import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline:none;
    text-decoration:none;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;

  }

  #root, body{
    width: 100%;
    height: 100%;
  }
  
  body{
    background:#171717;
  }

  img{
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  
  }

`
