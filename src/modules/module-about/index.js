import {
  Background,
  GoToText,
  Icon,
  LeftColumn,
  Main,
  RightColumn,
  TitleName,
} from "../../components/home-default/home-default-styles";
import { Arrow, BackTo, Text } from "./components/about.styles";

import icon_linkedin from "../../assets/images/linkedin.png";
import icon_github from "../../assets/images/github.png";
import arrow from "../../assets/images/arrow.png";
import { useNavigate } from "react-router-dom";


export const About = () => {
    const navigate = useNavigate();
    const goPage = () => {
      navigate("/");
    };
  
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
          <TitleName style={{marginLeft:"5%"}}>About me</TitleName>
          <Text>
            Sou estudante de engenharia e desenvolvedora web full stack pela
            Alpha Edtech. No tempo livre eu estudo, desenho e tento
            desenvolver alguma coisa legal.
          </Text>
          {/* <Arrow src={arrow}/> */}
         <BackTo onClick={goPage}>voltar</BackTo>
        </RightColumn>
      </Main>
    </>
  );
};
