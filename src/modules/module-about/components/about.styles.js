import styled from "styled-components";

export const Text = styled.p`
    width: 80%;
    max-width: 400px;
    margin-left:5%;
    color: #FFFFFF;
    font-size: 1.5em;
`;

export const Arrow = styled.image`
    width:80%;
    height:10%;
`;

export const BackTo = styled(Text)`
    font-size: 1.4em;
    text-decoration: underline;
    cursor:pointer;
`;