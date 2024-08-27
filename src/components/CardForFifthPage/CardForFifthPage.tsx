import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const CardForFifthPage = () => {
    return (
        <CardForFifthPageStyled>
            <StyledH5>Не нашли нужную страну? </StyledH5>
            <StyledH6>Свяжитесь с нами, мы найдем решение</StyledH6>
        </CardForFifthPageStyled>
    );
};

const CardForFifthPageStyled = styled.div`
  background: ${theme.colors.colorForCardBlue};
  width: 526px;
  text-align: left;
  height: 107px;
  
  color: ${theme.colors.fontColorWhite};
  border-radius: 20px;
  padding: 20px;
  @media (max-width: 426px) {
    width: 351px;
    height: 118px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    padding: 16px;

  }
  @media (min-width: 427px) and (max-width: 1024px) {
    width: 696px;
  }
`
const StyledH5 = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  @media (max-width: 426px) {
    font-size: 18px;
  }
  
  ;
`
const StyledH6 = styled.h6`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;

  @media (max-width: 426px) {
    font-size: 18px;
    line-height: 23px;
    font-weight: 400;

  }
`

