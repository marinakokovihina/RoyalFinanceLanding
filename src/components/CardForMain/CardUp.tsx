import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {IconCardTether} from "./Icons/IconCard";
import {useMediaQuery} from "react-responsive";
import 'animate.css/animate.min.css';
import   "./../../styles/style.css"
import {animationMode} from "../../store/type";
import ScrollAnimation from "react-animate-on-scroll";

export type CardForMainProps = {
    width?: string,
    height?: string,
    background?: string,
    border?: string,
    boxShadow?: string,
    backdropFilter?: string,
    colorH4?: string,
    colorP?: string,
    pText?: string,
    h4Text?: string,
    iconId?: string,
    display?: string,
    children?: React.ReactNode;
}
export const CardUp = (props: CardForMainProps) => {
    const isMobile = useMediaQuery({ maxWidth: 1439 });

    return (
        <ScrollAnimation
            animateIn={isMobile ? "animate__fadeIn" : "animate__fadeInRight"}
            animateOnce={animationMode}
            duration={1}
            delay={0}
            offset={10}
        >
        <StyledCardForMain className= {isMobile ? "" :  "animate__animated animate__fadeInRight" }
            height={props.height} width={props.width} background={props.background} border={props.border}
                           boxShadow={props.boxShadow} backdropFilter={props.backdropFilter}

            display={props.display}>
                <IconCardTether />
                <StyledH4 colorH4 = {theme.colors.fontColorWhite}>Сохранность ваших средств</StyledH4>
                <StyledP colorP = {theme.colors.fontColorWhite}>Гарантируем защиту <br/>ваших финансовых операций</StyledP>
        </StyledCardForMain>
        </ScrollAnimation>
    );
};

export const StyledCardForMain = styled.div <CardForMainProps>`
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
    animation-delay: 0.5s;
  }
  @media (min-width: 319px) and (max-width: 425px) {
    padding-left: 15px;
    padding-top: 15px;
  }
    @media (min-width: 426px) and (max-width: 767px) {
    padding-left: 16px;
    padding-top: 16px;

  }
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    
  }
  
`
export const StyledH4 = styled.h4<CardForMainProps>`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 12px;
  margin-top: 24px;
  color: ${props => props.colorH4};
  @media (max-width: 767px) {
    margin-top: 20px;
    font-size: 20px;
    line-height: 28px;

  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 12px;

  }
`
export const StyledP = styled.p<CardForMainProps>`
  color: ${props => props.colorP};
  font-weight: 400;
  font-size: 18px;
  line-height: 23.4px;
  max-width: 267px;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
    max-width: 267px;


  }

`

