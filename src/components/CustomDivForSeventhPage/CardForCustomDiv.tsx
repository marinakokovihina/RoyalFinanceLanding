import React from 'react';
import {Icon} from "../Icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
type CardProps = {
    iconId: string,
    height: string,
    width: string,
    viewBox: string,
    text: string,
    widthDiv: string,
}
export const CardForCustomDiv = (props: CardProps) => {
    return (
        <StyledCard widthDiv={props.widthDiv} height={props.height} width={props.width} viewBox={props.viewBox} iconId={props.iconId} text={props.text}

        >
            <Icon IconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
            <StyledP>{props.text}</StyledP>
        </StyledCard>
    );
};

const StyledCard = styled.div <CardProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  gap: 12px;
  width: ${props => props.widthDiv};
  height: 43px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;

`;
const StyledP = styled.p `
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 23px;
  text-align: justify;
  color: ${theme.colors.fontColorWhite};


  

`
