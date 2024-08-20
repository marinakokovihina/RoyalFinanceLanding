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
}
export const CardForFourthPage = (props: CardForFourthPageProps) => {
    return (
        <CardForFourthPageStyled background = {props.background} >
                <Icon IconId={`${props.iconId}`} viewBox={props.viewBox} width={props.width} height={props.height}/>
            <TextContainer>
                <StyledH5 colorTextH5 = {props.colorTextH5}>{props.textH5}</StyledH5>
                <StyledP colorTextP = {props.colorTextP}>{props.textP}</StyledP>
            </TextContainer>
        </CardForFourthPageStyled>
    );
};

const CardForFourthPageStyled = styled.div<CardForFourthPageProps>`
  width: 302px;
  height: 328px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: left;
  text-align: left;
  flex-direction: column;
  background: ${pr => pr.background};
  @media (max-width: 426px) {
    width: 351px;
    height: 269px;

  }
`;
const TextContainer = styled.div`
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

  }
`;
const StyledP = styled.p <CardForFourthPageProps>`
  color: ${props => props.colorTextP};
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  @media (max-width: 426px) {
    font-size: 18px;
    line-height: 23px;

  }
`;
