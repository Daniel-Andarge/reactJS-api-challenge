import { Main } from "./Main";
import {MainContainer} from './components/styles/MainContainer.styled'
import { Heading } from "./components/styles/Heading.styled";
import GlobalStyles from "./components/styles/Global";
import React from "react";
import { Underline } from "./components/styles/MainContainer.styled";


function App() {
  return (
<React.Fragment>
  <GlobalStyles/>

    <MainContainer>
      <Heading>
        <h1>Daniel Andarge</h1>
             <Underline/>
      
      </Heading>
      <Main />
      
    </MainContainer>

    </React.Fragment>
  );
}

export default App;
