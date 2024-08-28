import React from 'react';
import {CardForMainProps} from "./CardUp";
import {Icon} from "../Icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {SpanBlue} from "../BlueSpan/BlueSpan";
import {useMediaQuery} from "react-responsive";
import   "./../../styles/style.css"
export const CardForLeftColumn = (props: CardForMainProps) => {
    const isDesktop = useMediaQuery({ minWidth: 1025 });

    return (
        <StyledCardForMain className= { isDesktop ? "animate__animated animate__fadeInDown animate animate__delay-09s" : ''}
                           height={props.height} width={props.width} background={props.background} border={props.border}
                           boxShadow={props.boxShadow} backdropFilter={props.backdropFilter} >
            <Icon IconId='frameWithTradeIcon' height='72' width='142' viewBox='0 0 142 72'/>
            <Text>
                <StyledH4>Вывод Tether — <SpanBlue>T+0</SpanBlue> </StyledH4>
                <StyledP>Отсутствие роллинга и холдинга средств</StyledP>
            </Text>

        </StyledCardForMain>
    );
};
const Text = styled.div `
`
const StyledCardForMain = styled.div <CardForMainProps>`
  height: ${props => props.height || '300px'} ;
  width:  ${props => props.width || '300px'} ;
  background: ${props => props.background || ''};
  border-radius: 20px;
  border: 1px solid #F1F1F4;
  display: ${props => props.display || 'flex'} ;
  flex-direction: column;
  z-index: 2;
  align-items: flex-start;
  position: relative;
  padding-left: 20px;
  padding-top: 20px;
  text-align: left;
  .animate__delay-0.5s {
    animation-delay: 0.3s;
  }
  @media (max-width: 426px) {
    padding-left: 16px;
    padding-top: 16px;

  }
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
    gap: 32px;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    flex-direction: column ;
    gap: 32px;
  }
`
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
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 0;
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
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 0;
    max-width: 100%;
  }
  @media (min-width: 427px) and (max-width: 767px) {
    margin-top: 0;
    max-width: 100%;
  }
  
`
