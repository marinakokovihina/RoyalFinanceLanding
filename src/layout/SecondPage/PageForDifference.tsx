import React from 'react';
import styled from "styled-components";
import {SpanBlue} from "../../components/BlueSpan/BlueSpan";
import {Icon} from "../../components/Icon/Icon";
import {SvgWrapperStyled} from "../../components/SvgWrapper/SvgWrapper";
import {GroupOfCardForPageForDifference} from "../../components/CardForMain/GroupOfCardForPageForDifference";
import {useMediaQuery} from "react-responsive";
import ScrollAnimation from 'react-animate-on-scroll';
import {animationMode} from "../../store/type";
import {Image} from "../../components/Image/Image";
import man from "../../assets/img/ManForSecondPage.png"
export const PageForDifference = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({maxWidth: 1023})
    // const isDesktop = useMediaQuery({ minWidth: 1025 });

    return (
        <WrapperForDifferenceStyled id = "possibilities">
            <ScrollAnimation
                animateIn="animate__fadeIn"
                animateOnce={animationMode}
                duration={5}
                delay={0}
                offset={20}
            >
                <StyledH4 >
                    В чем <SpanBlue>наше отличие</SpanBlue> от других?
                </StyledH4>
            </ScrollAnimation>
            <PageForDifferenceStyled>
                <LeftColumn>
                    <GroupOfCardForPageForDifference/>
                </LeftColumn>
                <RightColumn>
                    <ScrollAnimation   animateIn="animate__fadeIn"
                                       animateOnce={animationMode}
                                       duration={1}
                                       >

                        <Image src={man} height={'306'} width={'306'}/>
                    {/*<Icon IconId={'man'} width={'306'} viewBox={'0 0 306 306'} height={'306'}/>*/}
                    </ScrollAnimation>
                    <StyledH4Mob>В чем <SpanBlue>наше отличие </SpanBlue>от других?</StyledH4Mob>
                </RightColumn>
        </PageForDifferenceStyled>
            {/*todo расширить на весь экран надпись
            */}
            <SvgWrapperStyled top={'1070px'} left={'84%'} fill={'none'} display={isMobile ? 'none' : isTablet ? 'none' : "block"}>
                <Icon IconId={'circleForPageDifference'}  height={'747'} viewBox={'0 0 298 747'} width={'298'}/>
            </SvgWrapperStyled>
        </WrapperForDifferenceStyled>
    );
};

const WrapperForDifferenceStyled = styled.div `
  font-weight: 600;
  font-size: 48px;
  text-align: left;
  margin-left: 2%;
  line-height: 56px;
  padding-top: 120px;
  margin-top: 120px;
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 0;
    padding-top: 60px;
    margin-top: 60px;
  }
  @media (min-width: 767px) and (max-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 0;

    margin-bottom: 0;
    max-width: 750px;
    padding-top: 60px;
    margin-top: 60px;
  }
`
const PageForDifferenceStyled = styled.div `
  font-weight: 600;
  display: flex;
  gap: 134px;
  font-size: 48px;
  line-height: 56px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 40px;
    align-items: flex-start;
    max-width: 351px;
  }
  
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 40px;
    align-items: flex-start;
  }
`
const StyledH4Mob = styled.h4 `
  display: none;

  @media (max-width: 767px) {
    display: block;
    font-size: 32px;
    line-height: 40px ;
    
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: block;
    font-size: 40px;
    line-height: 40px ;
    width: 100%;
    padding-top: 47px;

  }
`;
  const StyledH4 = styled.h4 `
  margin-bottom: 80px;
  display: block;

  @media (max-width: 767px) {
    display: none;
    flex-direction: column-reverse;
  }
    @media (min-width: 768px) and (max-width: 1024px) {
      display: none;

    }
`
const LeftColumn  = styled.div `
  @media (max-width: 426px) {
    display: flex;
align-items: center;
    
  }
`
const RightColumn = styled.div `
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;

  }
`
