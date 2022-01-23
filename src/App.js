import {
  RightColumn,
  Line,
  Main,
} from "./global-components/home-default/home-default-styles";
import { MainContent } from "./modules/module-main";
import { BackgroundContainer } from "./global-components/background/background";
import { Column } from "./global-components/left-column/left-column";

export default function App() {
  return (
    <>
      <BackgroundContainer />
      <Main>
       <Column/>

        <RightColumn>
          <MainContent />
        </RightColumn>
        <Line />
      </Main>
    </>
  );
}
