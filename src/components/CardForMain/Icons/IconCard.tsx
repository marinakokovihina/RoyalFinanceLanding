import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../Icon/Icon";
import {useMediaQuery} from "react-responsive";

export type IconCardTetherProps = {
    z_index?: string,
    backgroundColor?: string,
    height?: string,
    marginTop?: string,
    borderRadius?: string,
    width?: string,
    colorP?: string,
}

export const IconCardTether = () => {
    const isMobile = useMediaQuery({ maxWidth: 400 });

    return (
        <StyledIconCard>
            <StyledInnerDiv height={isMobile ? '60px' : '60px'} width={isMobile ? '319px' : '265px'} backgroundColor = {theme.colors.fontColorWhite}  z_index='6'>
                <Icon IconId={'Tether'} height={'36'} width={'36'} viewBox={'0 0 36 36'}/>
                <StyledP colorP={theme.colors.fontColorSecondary} >Оплата</StyledP>
                <StyledSpan>+250 USDT</StyledSpan>
            </StyledInnerDiv>
            <StyledInnerDiv marginTop={'-35px'} height={'48px'} backgroundColor = {'rgba(255, 255, 255, 0.25)'}  z_index='5'></StyledInnerDiv>
            <StyledInnerDiv marginTop={'-35px'} height={'48px'} backgroundColor = {'rgba(255, 255, 255, 0.25)'}  z_index='4'></StyledInnerDiv>

        </StyledIconCard>
    );
};

export const StyledIconCard = styled.div `
 display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 426px) {
    
  }
`
export const StyledInnerDiv = styled.div <IconCardTetherProps> `
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
    padding-left: 16px;
    align-items: center;
  }
`
export const StyledP = styled.p <IconCardTetherProps> `
  font-style: normal;
  margin-left: 12px;
  margin-right: 29px;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: ${props => props.colorP};
  @media (max-width: 426px) {
    margin-right: 83px;

  }
  
`
export const StyledSpan = styled.span `
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  color: ${theme.colors.fontPrimary};
`

