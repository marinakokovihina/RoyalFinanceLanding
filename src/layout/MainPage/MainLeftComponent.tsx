import React from 'react';
import {Button} from "../../components/Button/Button";
import {theme} from "../../styles/Theme";
import styled from "styled-components";
import 'animate.css/animate.min.css';
import {useMediaQuery} from "react-responsive";
import {animationMode} from "../../store/type";
import ScrollAnimation from "react-animate-on-scroll";



export const MainLeftComponent = () => {
    const isDesktop = useMediaQuery({ minWidth: 1025 });

    return (
        <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOnce={animationMode}
            duration={1}
            delay={1}
            offset={10}
            initiallyVisible={true}
        >
            <StyledMainLeftComponent className= { "animate__animated animate__fadeInLeft  " }>
                <StyledH2>Платежная система</StyledH2>
                <StyledH3>Прием платежей и вывод средств</StyledH3>
                <StyledP>Принимайте платежи на сайтах и других интернет-проектах, используя различные методы оплаты, и получайте гарантированные выплаты в любой точке мира</StyledP>
                <Button onClick = {() => { window.open("https://t.me/Rockefeller_017", "_blank");    }}
                    width={'238px'} height = {'48px'} text={'Связаться с нами'}
                         borderRadius={'12px'} iconId={'tgIcon'} background={'linear-gradient(270deg, #4168F1 30%, #3846BE 100%)'}
                         widthIcon={'24'} heightIcon={'24'} viewBoxIcon={'0 0 24 24'} color={`${theme.colors.fontColorWhite}`}
                         gap={'12px'}
                />
            </StyledMainLeftComponent>
        </ScrollAnimation>
    );
};


const StyledMainLeftComponent = styled.div `
  flex-direction: column;
  max-width: 566px;
  justify-content: left;
  text-align: left;
  //margin-left: 5%;
  @media (max-width: 426px) {
    padding-left:0px;
    padding-right: 12px;
    margin-bottom: 100px;
    align-items: center;
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
  @media (max-width: 430px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 40px;

  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 56px;
    line-height: 68px;

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
  @media (max-width: 430px) {
    margin-bottom: 40px;
    
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 40px;

  }
`
