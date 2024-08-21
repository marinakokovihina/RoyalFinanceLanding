import React from 'react';
import styled from "styled-components";
import {SpanBlue} from "../../components/BlueSpan/BlueSpan";
import {Icon} from "../../components/Icon/Icon";
import {SvgWrapperStyled} from "../../components/SvgWrapper/SvgWrapper";
import {GroupOfCardForPageForDifference} from "../../components/CardForMain/GroupOfCardForPageForDifference";
import {useMediaQuery} from "react-responsive";

export const PageForDifference = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <WrapperForDifferenceStyled>
            <StyledH4>В чем <SpanBlue>наше отличие</SpanBlue> от других?</StyledH4>
            <PageForDifferenceStyled>
                <LeftColumn>
                    <GroupOfCardForPageForDifference/>
                </LeftColumn>
                <RightColumn>
                    <Icon IconId={'man'} width={'306'} viewBox={'0 0 306 306'} height={'306'}/>
                    <StyledH4Mob>В чем <SpanBlue>наше отличие</SpanBlue><br/>от других?</StyledH4Mob>
                </RightColumn>
        </PageForDifferenceStyled>
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
    flex-direction: column;
    margin-bottom: 0px;

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
  }
`
const StyledH4Mob = styled.h4 `
  display: none;

  @media (max-width: 426px) {
    display: block;
    font-size: 32px;
    line-height: 40px ;
    
  }
`;
  const StyledH4 = styled.h4 `
  margin-bottom: 80px;
  display: block;

  @media (max-width: 426px) {
    display: none;
    flex-direction: column-reverse;
  }

`
const LeftColumn  = styled.div `
  
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
    align-items: start;
  }
  
`
