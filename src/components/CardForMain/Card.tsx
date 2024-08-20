import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/Icon/Icon";


type CardProps = {
    background?: string,
    iconId?: string,
    textColor?: string,
    boxShadow?: string,
    backdropFilter?: string,
    textP?: string,
    textH5?: string,
    heightIcon?: string,
    widthIcon?: string,
    viewBoxIcon?: string,
    textColorP?: string,
    widthDiv?: string,
    heightDiv?: string,
    maxWidthP?: string,
    maxWidthH?: string,
}
export const Card = (props: CardProps) => {
    return (
        <StyledCard heightDiv={props.heightDiv} widthDiv={props.widthDiv} maxWidthP = {props.maxWidthP}
                    maxWidthH = {props.maxWidthH}
            background={props.background} boxShadow={props.boxShadow} backdropFilter={props.backdropFilter}
                    textColor={props.textColor} textColorP={props.textP}>
            <WrapperStyledCard>
                <>
                    <Icon IconId={`${props.iconId}`} width={`${props.widthIcon}`} height={`${props.heightIcon}` } viewBox={`${props.viewBoxIcon}`}/>
                </>
                <TextDiv>
                    <StyledH5 maxWidthH = {props.maxWidthH}>{props.textH5}</StyledH5>
                    <StyledP maxWidthP = {props.maxWidthP} textColorP={props.textColorP}>{props.textP}</StyledP>
                </TextDiv>

            </WrapperStyledCard>
        </StyledCard>
    );
};
const TextDiv = styled.div `
    display: flex;
  flex-direction: column;
  gap: 12px;
`
const WrapperStyledCard = styled.div `
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: left;
  text-align: left;
  padding-left: 20px;
  padding-top: 20px;
  svg{
    margin: 0;
    padding: 0;
  }
  @media (max-width: 426px) {
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    gap: 24px;
    padding-left: 16px;

  }
`
const StyledCard = styled.div <CardProps> `
    background: ${props => props.background};
    box-shadow: ${props => props.boxShadow};
    backdrop-filter: ${props => props.backdropFilter};
    color: ${props => props.textColor};
    box-shadow: ${props => props.boxShadow};
    width: ${props => props.widthDiv || '404px'}; ;
    height: ${props => props.heightDiv || '227px'}; ;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 20px;
    justify-content: left;
    
`
const StyledH5 = styled.h5 <CardProps>`
  font-weight: 600;
  font-size: 24px;
  padding-top: 20px;
  line-height: 32px;
  @media (max-width: 426px) {
    font-size: 20px;
    padding-top: 0px;
    padding-bottom: 0px;
    max-width:${props => props.maxWidthH || '100%'};
    line-height: 28px;
  }
`

const StyledP = styled.p <CardProps>  `
  font-weight: 400;
  font-size: 18px;
  color: ${props => props.textColorP};
  line-height: 23.4px;
  
  @media (max-width: 426px) {
    font-size: 18px;
    line-height: 23px;
    max-width:${props => props.maxWidthP || '100%'};

  }
`
