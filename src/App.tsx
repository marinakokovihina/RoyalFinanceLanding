import React from 'react';
import {Header} from "./layout/header/Header";
import {StyledWrapper} from "./components/wrapper/WrapperStyled";
import {MainPage} from "./layout/MainPage/MainPage";
import {PageForDifference} from "./layout/SecondPage/PageForDifference";
import {ThirdPage} from "./layout/ThirdPage/ThirdPage";
import {FourthPage} from "./layout/FourthPage/FourthPage";
import {FifthPage} from "./layout/FifithPage/FifthPage";
import {SixthPage} from "./layout/SixthPage/SixthPage";
import {SeventhPage} from "./layout/SeventhPage/SeventhPage";
import {Footer} from "./layout/Footer/Footer";
import {GlobalStyles} from "./styles/globalStyles";

function App() {

  return (
      <StyledWrapper align={'center'} justify={"center"} direction={"column"}>
          <Header/>
          <MainPage/>
          <PageForDifference/>
          <ThirdPage/>
          <FourthPage/>
          <FifthPage/>
          <SixthPage/>
          <SeventhPage/>
          <Footer/>
      </StyledWrapper>
  );
}
//TODO ВЫНЕСТИ ВСЕ СВГШКИ В ОТДЕЛЬНЫЙ ФАЙЛ
//todo ДОБАВИТЬ ФАВИКОНКУ РОЯЛ ФИНАНС
//todo ПОМЕНЯТЬ ДЕФОЛТНЫЙ ЯЗЫК НА РУССКИЙ
export default App;
