import {
  Background,
  Icon,
  LeftColumn,
  Main,
  RightColumn,
  TitleName,
  Description,
  Btn_myjobs,
  Btn_aboutme,
  BTN,
  Info,
  Line,
  GoToText,
} from "./components/home-default/home-default-styles";
import icon_linkedin from "./assets/images/linkedin.png";
import icon_github from "./assets/images/github.png";
import { useState } from "react";

export default function App() {
  const [openGithub, setOpenGitHub] = useState(false);
  const [openLinkedin, setOpenLinkedin] = useState(false);

  return (
    <>
      <Background />
      <Main>
        <LeftColumn>
          <a
            href="https://www.linkedin.com/in/layssa-lima/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Icon src={icon_linkedin} />
          </a>
          <GoToText top="83%" left="7%" className="tooltip">
            Go to Linkedin!
          </GoToText>

          <a href="https://github.com/Layssaa" target="_blank" rel="noreferrer">
            {" "}
            <Icon src={icon_github} />
          </a>
          <GoToText top="93%" left="7%" className="tooltip">
            Go to Github!
          </GoToText>
        </LeftColumn>

        <RightColumn>
          <Info>
            <TitleName>Layssa Lima</TitleName>
            <Description>full stack web developer</Description>
          </Info>
          <BTN>
            <Btn_myjobs>My Jobs</Btn_myjobs>
            <Btn_aboutme>About Me</Btn_aboutme>
          </BTN>
        </RightColumn>
      </Main>
      <Line />
    </>
  );
}
