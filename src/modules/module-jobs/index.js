import {
  Background,
  GoToText,
  Icon,
  TitleName,
} from "../../components/home-default/home-default-styles";
import { Arrow, BackTo, CardJob, LeftColumn, Main, RightColumn, Text } from "./components/jobs.styles";

import icon_linkedin from "../../assets/images/linkedin.png";
import icon_github from "../../assets/images/github.png";
import arrow from "../../assets/images/arrow.png";
import { useNavigate } from "react-router-dom";

export const Jobs = () => {
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
          <CardJob />
          {/* <TitleName style={{ marginLeft: "5%" }}>Jobs</TitleName>
          <Text>
            Estudante de engenharia e desenvolvedora web full stack. No tempo
            livre estudo, desenho e desenvolvo alguma coisa divertida.
          </Text> */}
          <Arrow src={arrow}/>´
          <p>outro teste</p>
          <BackTo onClick={goPage}>voltar</BackTo>
        </RightColumn>
        <p>teste branch</p>
      </Main>
    </>
  );
};
