import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    
}

/* 
    https://cdn.pixabay.com/photo/2020/07/11/04/55/particles-5392771_1280.jpg
*/
body, html{
    background-image: url(https://cdn.pixabay.com/photo/2023/01/02/23/50/stars-7693324_1280.jpg);
    width: 100vw;
    height: 100vh;
    font-family: 'Times New Roman', Times, serif;
    color: white;
    /* codigo para colocar imagem sem quebrar, cobrindo 100% da tela */
    background-repeat: no-repeat;    
    bottom: 0;
    left: 0;
    overflow: auto;
    padding: 3em;
    position: absolute;
    right: 0;
    top: 0;
    background-size: cover;
}
`
