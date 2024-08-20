import React from 'react';
import {Icon} from "../../Icon/Icon";
import {IconCardTetherProps, StyledIconCard} from "./IconCard";
import {theme} from "../../../styles/Theme";
import {useMediaQuery} from "react-responsive";
import styled from "styled-components";
export const IconCardFast = () => {
    const isMobile = useMediaQuery({ maxWidth: 400 });

    return (
        <StyledIconCard>
            <StyledInnerDiv height={'48px'} width={isMobile ? '175px' : '172px'} backgroundColor = {'rgba(255, 255, 255, 0.25)'} borderRadius='30px' z_index='7'>
                <Icon IconId={'fastIcon'} height={'48'} width={'48'} viewBox={'0 0 48 48'}/>
                <StyledP colorP = {theme.colors.fontColorWhite}>3 минуты</StyledP>
            </StyledInnerDiv>

        </StyledIconCard>
    );
};


const StyledP = styled.p <IconCardTetherProps> `
  font-style: normal;
  margin-left: 12px;
  margin-right: 29px;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: ${props => props.colorP};
  @media (max-width: 426px) {
    margin-right: 0px;

  }`;
const StyledInnerDiv = styled.div <IconCardTetherProps> `
  width: ${props => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.borderRadius || '12px'};
  height: ${props => props.height};
  z-index: ${props => props.z_index};
  background-color: ${props=>props.backgroundColor};
  margin-top: ${props => props.marginTop};
  @media (max-width: 426px) {
    justify-content: start;
    align-items: center;
  }
`
