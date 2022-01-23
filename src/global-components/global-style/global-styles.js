import { createGlobalStyle } from 'styled-components';
import imageCursor from "../../assets/images/mouse.svg";


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

  a{
    width:fit-content;
    height:fit-content;

    display: flex;
    justify-content: center;
    color:inherit;
  }

  body::-webkit-scrollbar {
    width: 12px;              
  }

  body::-webkit-scrollbar-track {
      background: none;    
      border-radius: 20px;   
  }

  body::-webkit-scrollbar-thumb {
      background-color: #141416;    
      border-radius: 20px;      
      border: 3px solid #191A1F;  
  }

`
