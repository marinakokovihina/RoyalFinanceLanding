import React from 'react';
import styled from "styled-components";
import {SpanBlue} from "../../components/BlueSpan/BlueSpan";
import {Icon} from "../../components/Icon/Icon";
import {SvgWrapperStyled} from "../../components/SvgWrapper/SvgWrapper";
import {GroupOfCardForPageForDifference} from "../../components/CardForMain/GroupOfCardForPageForDifference";
import {useMediaQuery} from "react-responsive";
import ScrollAnimation from 'react-animate-on-scroll';

export const PageForDifference = () => {
    const isMobile = useMediaQuery({ maxWidth: 426 });
    // const isDesktop = useMediaQuery({ minWidth: 1025 });

    return (
        <WrapperForDifferenceStyled id = "possibilities">
            <ScrollAnimation   animateIn="animate__fadeIn"
                               animateOnce={true}
                               duration={1}
                               delay={0}
                               offset={50}  >
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
                                       animateOnce={true}
                                       duration={1}
                                       delay={500}
                                       offset={10}  >
                    <Icon IconId={'man'} width={'306'} viewBox={'0 0 306 306'} height={'306'}/>
                    </ScrollAnimation>
                    <StyledH4Mob>В чем <SpanBlue>наше отличие </SpanBlue>от других?</StyledH4Mob>
                </RightColumn>
        </PageForDifferenceStyled>
            {/*todo расширить на весь экран надпись
            */}
            <SvgWrapperStyled top={'1070px'} left={'80%'} fill={'none'} display={isMobile ? 'none' : "block"}>
                <Icon IconId={'circleForPageDifference'}  height={'747'} viewBox={'0 0 298 747'} width={'298'}/>
            </SvgWrapperStyled>
        </WrapperForDifferenceStyled>
    );
};

const WrapperForDifferenceStyled = styled.div `
  font-weight: 600;
  font-size: 48px;
  text-align: left;
  line-height: 56px;
  margin-bottom: 240px;
  @media (max-width: 426px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 0;

  }
  @media (min-width: 427px) and (max-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 0;
    max-width: 750px;
  }
`
const PageForDifferenceStyled = styled.div `
  font-weight: 600;
  display: flex;
  gap: 134px;
  font-size: 48px;
  line-height: 56px;
  @media (max-width: 426px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 40px;
    align-items: flex-start;
    max-width: 351px;
  }
  
  @media (min-width: 427px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 40px;
    align-items: flex-start;
  }
`
const StyledH4Mob = styled.h4 `
  display: none;

  @media (max-width: 426px) {
    display: block;
    font-size: 32px;
    line-height: 40px ;
    
  }
  @media (min-width: 427px) and (max-width: 1024px) {
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

  @media (max-width: 426px) {
    display: none;
    flex-direction: column-reverse;
  }
    @media (min-width: 427px) and (max-width: 1024px) {
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
  @media (max-width: 426px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
  }
  @media (min-width: 427px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;

  }
`
