import { useNavigate } from "react-router-dom";
import {
  BTN,
  Btn_aboutme,
  Btn_myjobs,
  Description,
  Info,
  TitleName,
} from "../../global-components/home-default/home-default-styles";

export const MainContent = () => {
  const navigate = useNavigate();
  const goPage = () => {
    navigate("/about");
  };

const linkTo = () => window.open('https://github.com/Layssaa', '_blank');

  return (
    <>
      <Info>
        <TitleName>Layssa Lima</TitleName>
        <Description>full stack web developer</Description>
      </Info>
      <BTN>
        <Btn_myjobs onClick={linkTo}>
            My Jobs
        </Btn_myjobs>
        <Btn_aboutme onClick={goPage}>
           About Me
        </Btn_aboutme>
      </BTN>
    </>
  );
};
