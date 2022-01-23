import { GoToText, Icon, LeftColumn } from "../home-default/home-default-styles"

import icon_linkedin from "../../assets/images/linkedin.png";
import icon_github from "../../assets/images/github.png";

export const Column = () =>{
    return (
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

    )
}