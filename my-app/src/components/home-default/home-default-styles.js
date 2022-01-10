import styled from "styled-components";
import imagebackground from "../../assets/images/background-3.svg";
// background-position-x: right;
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

export const Main = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;

  z-index: 0;

  display: flex;
  justify-content: center;

  max-width: 1000px;
`;

export const LeftColumn = styled.div`
  width: 8%;
  height: 98%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  gap: 4%;
`;

// @media(min-width: 600px) {
// background:red;
// visibility:visible;
// }

export const RightColumn = styled.div`
  width: 92%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  justify-content: center;
  gap: 4%;
`;

export const Info = styled.div`
  width: 100%;
  height: 40%;
  padding-left: 5%;
`;

export const TitleName = styled.h1`
  font-size: 3em;
  color: #ffffff;
  font-weight: 300;
`;

export const Description = styled.p`
  font-size: 1.4em;
  color: #ffffff;
  font-weight: 300;
`;

export const Icon = styled.img`
  width: 50%;
  cursor: pointer;

  &:hover,
  .tooltip {
    display: flex;
  }

  
  @media (max-width: 360px) {
    width: 90%;
    margin-left:25%;
  }
`;

export const BTN = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  padding-left: 4%;

  @media (max-width: 360px) {
    width: 90%;
  }
`;

export const Btn_myjobs = styled.button`
  width: 45%;
  height: 90%;
  cursor: pointer;
  background: #a128ff;
  color: #ffffff;
  border: none;
  font-size: 1.2em;
  border-radius:3px;

  &:hover {
    background: #ac46fd;
  }
`;

export const Btn_aboutme = styled.button`
  width: 45%;
  height: 90%;
  cursor: pointer;
  background: #a128ff;
  color: #ffffff;
  border: none;
  font-size: 1.2em;
  border-radius:3px;


  &:hover {
    background: #ac46fd;
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 20%;
  left: 18%;
  top: 32%;
  border: 0.5px solid #ffffff;

  @media (max-width: 360px) {
    border: 0.1px solid #ffffff;
    left: 58%;
    top: 31.55%;
}
`;

// export const Tooltip = styled.div`
//   width: 35%;
//   height: 12%;
//   position: relative;
//   display: inline-block;
// `;

export const GoToText = styled.span`
  text-decoration: underline;
  color: #ffffff;
  position: absolute;
  font-size: 1.2em;

  top: ${(props) => props.top};
  left: ${(props) => props.left};

  display: none;
`;

// visibility: hidden;
