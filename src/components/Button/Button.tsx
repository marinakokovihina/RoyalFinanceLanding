import React from 'react';
import styled from "styled-components";
import {Icon} from "../Icon/Icon";


type ButtonType = {
    text?: string,
    color?: string,
    width?: string,
    height?: string,
    background?: string,
    borderRadius?: string,
    iconId?: string,
    widthIcon?: string,
    heightIcon?: string,
    viewBoxIcon?: string,
    gap?: string,
    display?: string,
    onClick?: () => void
}
export const Button = (props: ButtonType) => {
    return (
        <StyledButton onClick={props.onClick} display = {props.display}
                      gap = {props.gap} color={props.color} background={props.background}
                      width={props.width} height={props.height} borderRadius={props.borderRadius} >
           <Icon IconId={`${props.iconId}`} height={`${props.heightIcon}`}
                 width={`${props.widthIcon}`} viewBox={`${props.viewBoxIcon}`} />
            {props.text}
        </StyledButton>
    );
};

const StyledButton = styled.div<ButtonType> `
  background:  ${props => props.background};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  display:  ${props => props.display || 'flex'};;
  align-items: center;
  font-weight: 500;
  min-width: 185px;
  font-size: 18px;
  justify-content: center;
  gap: ${props => props.gap};
  z-index: 6;
  position: relative;
  color: ${props => props.color};
  &:hover{
    cursor: pointer;
  }
`





