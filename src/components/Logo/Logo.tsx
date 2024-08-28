import React from 'react';
import {Icon} from "../Icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {useMediaQuery} from "react-responsive";
import {SvgWrapperStyled} from "../SvgWrapper/SvgWrapper";
import {MainLeftComponent} from "../../layout/MainPage/MainLeftComponent";
import {MainRightComponent} from "../../layout/MainPage/MainRightComponent";


// const isMobile = useMediaQuery({ maxWidth: 768 });
// const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
// const isDesktop = useMediaQuery({ minWidth: 1025, maxWidth: 1440 });
// const isBigDesktop = useMediaQuery({ minWidth: 1441 });
// return (
//     <StyledMain>
//         <SvgWrapperStyled top={isBigDesktop ? '167px' : '240px'} left={'-3%'}>
//             <Icon IconId={'frameWithCirclesLeft'} height={"608"} width={"232"} viewBox={"0 0 232 607"}/>
//         </SvgWrapperStyled>
//         <SvgWrapperStyled top={'110px'} left={'-3%'} fill={'none'}>
//             <Icon IconId={'frameWithCirclesLeftSmall'} height={"608"} width={"426"} viewBox={"0 0 608 426"}/>
//         </SvgWrapperStyled>
//         <SvgWrapperStyled top={'-5%'} left={'65%'} fill={'none'}>
//             <Icon IconId={'frameWithCirclesRightSmall'} height={"700"} width={"820"} viewBox={"0 0 800 700"}/>
//         </SvgWrapperStyled>
//         <SvgWrapperStyled top={'-4%'} left={'50%'} fill={'none'}>
//             <Icon IconId={'frameWithCirclesRightBig'} height={"730"} width={"950"} viewBox={"0 0 904 807"}/>
//         </SvgWrapperStyled>
//
//         <MainLeftComponent/>
//         <MainRightComponent/>
//     </StyledMain>
// );
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
