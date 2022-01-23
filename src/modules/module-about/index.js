import {
  GoToText,
  Icon,
  LeftColumn,
  Main,
  RightColumn,
  TitleName,
} from "../../global-components/home-default/home-default-styles";
import { BackTo, Text } from "./components/about.styles";

import { useNavigate } from "react-router-dom";
import { BackgroundContainer } from "../../global-components/background/background";
import { Column } from "../../global-components/left-column/left-column";


export const About = () => {
    const navigate = useNavigate();
    const goPage = () => {
      navigate("/");
    };
  
  return (
    <>
      <BackgroundContainer />
      <Main>
        <Column/>
      
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
