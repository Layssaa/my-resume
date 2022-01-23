import styled from "styled-components";
import imagebackground from "../../assets/images/background-3.svg";


export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  z-index: 0;

  background-image: url(${imagebackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: right;
`;