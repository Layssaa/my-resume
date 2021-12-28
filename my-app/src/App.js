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
  Tooltip,
  GoToText,
} from "./components/home-default/home-default-styles";
import icon_linkedin from "./assets/images/linkedin.png";
import icon_github from "./assets/images/github.png";

export default function App() {
  return (
    <>
      <Background />
      <Main>
        <LeftColumn>
          <div className="tooltip">
            <Icon src={icon_linkedin} />
            <span className="GoToText">Go to Linkedin!</span>
          </div>

          <div className="tooltip">
            <Icon src={icon_github} />
            <span className="GoToText">Go to Github!</span>
          </div>
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
