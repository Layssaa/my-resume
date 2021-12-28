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
`;

export const Main = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;

  z-index: 0;

  display: flex;
  justify-content: center;
`;

export const LeftColumn = styled.div`
  width: 8%;
  height: 98%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  gap: 4%;

  .tooltip {
    width: 35%;
    height: 12%;
    position: relative;
    display: inline-block;
  }

  .GoToText {
    display: none;
    text-decoration: underline;
  }

  .tooltip:hover .tooltiptext {
    display: flex;
  }
`;

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
  width: 100%;
  cursor: pointer;
`;

export const BTN = styled.div`
  width: 35%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  padding-left: 4%;
`;

export const Btn_myjobs = styled.button`
  width: 45%;
  height: 90%;
  cursor: pointer;
  background: #a128ff;
  color: #ffffff;
  border: none;
  font-size: 1.2em;

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
`;

// export const Tooltip = styled.div`
//   width: 35%;
//   height: 12%;
//   position: relative;
//   display: inline-block;
// `;

// export const GoToText = styled.span`
//   visibility: hidden;
//   text-decoration: underline;
// `;
