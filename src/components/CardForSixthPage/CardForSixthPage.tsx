import React from 'react';
import styled from "styled-components";
import {Icon} from "../Icon/Icon";
import {SvgWrapperStyled} from "../SvgWrapper/SvgWrapper";
type CardForFourthPageProps = {
    iconId?: string,
    height?: string,
    width?: string,
    viewBox?: string,
    textH5?: string,
    textP?: string,
    background?: string,
    colorTextH5?: string,
    colorTextP?: string,
    heightDiv?: string,
}
export const CardForSixthPage = (props: CardForFourthPageProps) => {
    return (
        <CardForFourthPageStyled background = {props.background} heightDiv={props.heightDiv} >
            <Icon IconId={`${props.iconId}`} viewBox={props.viewBox} width={props.width} height={props.height}/>
            <TextContainer>
                <StyledH5 colorTextH5 = {props.colorTextH5}>{props.textH5}</StyledH5>
                <StyledP colorTextP = {props.colorTextP}>{props.textP}</StyledP>
            </TextContainer>
        </CardForFourthPageStyled>
    );
};

const CardForFourthPageStyled = styled.div<CardForFourthPageProps>`
  width: 306px;
  height: ${pr => pr.heightDiv || '273px'};
  
  padding: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: left;
  text-align: left;
  flex-direction: column;
  background: ${pr => pr.background};
  @media (max-width: 426px) {
    width: 336px;
    gap: 24px;
    flex-direction: row;
    padding: 16px;

  }
  @media (min-width: 427px) and (max-width: 1023px) {
    width: 336px;
    height: 269px;
  }
  @media (min-width: 1023px) and (max-width: 1439px) {
    width: 456px;
    height: 153px;
    flex-direction: row;
  gap: 32px
  }
`;
const TextContainer = styled.div`
  @media (max-width: 426px) {
  }
  @media (min-width: 1023px) and (max-width: 1439px) {
   max-width: 60%;
  }
`;
const StyledH5 = styled.h5 <CardForFourthPageProps>`
  color: ${props => props.colorTextH5};
  font-style: normal;
  margin-top: 20px;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  @media (max-width: 426px) {
    font-size: 20px;
    line-height: 28px;
    margin-top: 0px;

  }
  @media (min-width: 1023px) and (max-width: 1439px) {
    margin-top: 0px;

  }
  
`;
const StyledP = styled.p <CardForFourthPageProps>`
  color: ${props => props.colorTextP};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  @media (max-width: 426px) {
    font-size: 18px;
    max-width: 200px;
    line-height: 23px;
  }
`;
