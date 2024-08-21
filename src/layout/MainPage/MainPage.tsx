import React from 'react';
import styled from "styled-components";
import {MainLeftComponent} from "./MainLeftComponent";
import {MainRightComponent} from "./MainRightComponent";
import {SvgWrapperStyled} from "../../components/SvgWrapper/SvgWrapper";
import {Icon} from "../../components/Icon/Icon";
import { useMediaQuery } from 'react-responsive';

export const MainPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    // const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
    // const isDesktop = useMediaQuery({ minWidth: 1025, maxWidth: 1440 });
    const isBigDesktop = useMediaQuery({ minWidth: 1441 });
    return (
        <StyledMain>
            <SvgWrapperStyled display={isMobile ? 'none' : 'block'} top={isBigDesktop ? '167px' : '240px'} left={'-3%'}>
                <Icon IconId={'frameWithCirclesLeft'} height={"608"} width={"232"} viewBox={"0 0 232 607"}/>
            </SvgWrapperStyled>
            <SvgWrapperStyled display={isMobile ? 'none' : 'block'} top={'110px'} left={'-3%'} fill={'none'}>
                    <Icon IconId={'frameWithCirclesLeftSmall'} height={"608"} width={"426"} viewBox={"0 0 608 426"}/>
            </SvgWrapperStyled>
            <SvgWrapperStyled  display={isMobile ? 'none' : 'block'} top={'-5%'} left={'65%'} fill={'none'}>
                    <Icon IconId={'frameWithCirclesRightSmall'} height={"700"} width={"820"} viewBox={"0 0 800 700"}/>
            </SvgWrapperStyled>
            <SvgWrapperStyled  display={isMobile ? 'none' : 'block'} top={'-4%'} left={'50%'} fill={'none'}>
                    <Icon IconId={'frameWithCirclesRightBig'} height={"730"} width={"950"} viewBox={"0 0 904 807"}/>
            </SvgWrapperStyled>

            <MainLeftComponent/>
            <MainRightComponent/>
        </StyledMain>
    );
};

const StyledMain = styled.main `
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  margin-bottom: 240px;
  @media (max-width: 426px) {
      flex-direction: column;
        margin-bottom: 240px;
      
  }
`
