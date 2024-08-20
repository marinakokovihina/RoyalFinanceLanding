import React from 'react';
import {CardForMainProps, StyledCardForMain} from "./CardUp";
import {Icon} from "../Icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {SpanBlue} from "../BlueSpan/BlueSpan";

export const CardForLeftColumn = (props: CardForMainProps) => {
    return (
        <StyledCardForMain height={props.height} width={props.width} background={props.background} border={props.border}
                           boxShadow={props.boxShadow} backdropFilter={props.backdropFilter} >
            <Icon IconId='frameWithTradeIcon' height='72' width='142' viewBox='0 0 142 72'/>
            <StyledH4>Вывод Tether — <SpanBlue>T+0</SpanBlue> </StyledH4>
            <StyledP>Выводы без комиссий  в течение 30 минут</StyledP>
        </StyledCardForMain>
    );
};;


const StyledH4 = styled.h4 `
  font-weight: 600;
  margin-top: 24px;
  font-size: 24px;
  margin-bottom: 12px;
  line-height: 32px;
  color: ${theme.colors.fontPrimary};
  @media (max-width: 426px) {
    margin-top: 20px;
    font-size: 20px;

    flex-direction: column;
    align-items: flex-start;

  }

`
const StyledP = styled.p `
    color: ${theme.colors.fontColorSecondary};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    max-width: 200px;

  @media (max-width: 426px) {
    align-items: flex-start;
    max-width: 100%;

  }
  
`
