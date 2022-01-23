import styled from "styled-components";
import { keyframes } from "styled-components";

let randomLeft = () => {
  return Math.random() * 30;
};

const starAnimation = keyframes`
    0% { top:30%; left: ${randomLeft()}%; opacity:1; }
    100% { top:85%; left: 97%; opacity:0.2;}
`;

export const StarIn = styled.div`
  position: absolute;

  width: 1vw;
  height: 2vh;
  border-radius: 8px;

  background: #f0f0f0;
`;

export const StarOut = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 3vw;
  height: 5vh;

  top: ${(props) => props.top - lessHeight(props.top)}%;

  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0) 100%
  );

  filter: blur(3px);

  animation-name: ${starAnimation};

  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const lessHeight = (_number) => {
  let random = Math.random() * 100;
  if (random === _number) {
    random = Math.random() * 100;
  }

  if (random >= _number) {
    random = Math.random() * 100;
  }

  return random;
};
