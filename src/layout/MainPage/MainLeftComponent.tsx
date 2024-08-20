import React from 'react';
import {Button} from "../../components/Button/Button";
import {theme} from "../../styles/Theme";
import styled from "styled-components";


export const MainLeftComponent = () => {
    return (
        <StyledMainLeftComponent>
            <StyledH2>Платежная система</StyledH2>
            <StyledH3>Прием платежей и вывод средств</StyledH3>
            <StyledP>Принимайте платежи на сайтах и других интернет-проектах, используя различные методы оплаты, и получайте гарантированные выплаты в любой точке мира</StyledP>
            <Button  width={'238px'} height = {'48px'} text={'Связаться с нами'}
                     borderRadius={'12px'} iconId={'tgIcon'} background={'linear-gradient(270deg, #4168F1 30%, #3846BE 100%)'}
                     widthIcon={'24'} heightIcon={'24'} viewBoxIcon={'0 0 24 24'} color={`${theme.colors.fontColorWhite}`}
                     gap={'12px'}
            />
        </StyledMainLeftComponent>
    );
};


const StyledMainLeftComponent = styled.div `
  flex-direction: column;
  max-width: 566px;
  justify-content: left;
  text-align: left;
  @media (max-width: 426px) {
    padding-left: 12px;
    padding-right: 12px;
    margin-bottom: 100px;
  }
`
const StyledH2 = styled.h2 `
    font-style: normal;
    font-weight: 600;
    text-align: left;
    font-size: 24px;
    line-height: 32px;
    color: ${theme.colors.fontColorBlue};
    margin-bottom: 20px;
  @media (max-width: 426px) {
    font-size: 20px;
  }

`
const StyledH3 = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 68px;
  line-height: 76px;
  color: ${theme.colors.fontPrimary};
  margin-bottom: 60px;
  @media (max-width: 426px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 40px;

  }
`
const StyledP = styled.p`
  max-width: 444px;
  font-style: normal;
  text-align: left;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: ${theme.colors.fontPrimary};
  margin-bottom: 114px;
  @media (max-width: 426px) {
    margin-bottom: 40px;
  }
`
