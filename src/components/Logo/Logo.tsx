import React from 'react';
import {Icon} from "../Icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {useMediaQuery} from "react-responsive";

export const Logo = () => {
    const isMobile = useMediaQuery({ maxWidth: 426 });
    return (
        <StyledLogo>
            <StyledIcon>
                <Icon IconId={isMobile ? 'smallLogo' : 'Logo'} height={isMobile ? '24' : '36' } width={isMobile ? '24' : '36' } viewBox={isMobile ? '0 0 24 24' : '0 0 36 36' } />
            </StyledIcon>
            <StyledH1>RoyalFinance</StyledH1>
        </StyledLogo>
    );
};
const StyledIcon = styled.div `
  @media (max-width: 426px) {
  }
    
`
const StyledH1 = styled.h1 `
  font-style: normal;
  font-weight: 600;
  @media (max-width: 426px) {
    font-size: 20px;

  }
  font-size: 28px;
  line-height: 36px;
  color: ${theme.colors.fontColorSecondary};
`
const StyledLogo = styled.header `
    display: flex;
    gap: 24px;
    align-items: center;
  @media (max-width: 426px) {
    gap: 12px;
  }
  @media (min-width: 427px) and (max-width: 1024px) {
    margin-right: 159px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    margin-right: 395px;

  }

`
