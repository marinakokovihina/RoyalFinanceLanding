import React from 'react';
import styled from "styled-components";
import {MainLeftComponent} from "./MainLeftComponent";
import {MainRightComponent} from "./MainRightComponent";
import {SvgWrapperStyled} from "../../components/SvgWrapper/SvgWrapper";
import {Icon} from "../../components/Icon/Icon";
import { useMediaQuery } from 'react-responsive';

export const MainPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1399 });
    const isBigDesktop = useMediaQuery({ minWidth: 1400 });
    const Tab = useMediaQuery({maxWidth: 1400})
    return (
        <StyledMain>
            <SvgWrapperStyled display={isMobile ? 'none' : isTablet ? 'none' : 'block'} top={isBigDesktop ? '167px' : '240px'} left={'-3%'}>
                <Icon IconId={'frameWithCirclesLeft'} height={"608"} width={"232"} viewBox={"0 0 232 607"}/>
            </SvgWrapperStyled>
            <SvgWrapperStyled display={isMobile ? 'none' : isTablet ? 'none' : 'block'} top={'110px'} left={'-3%'} fill={'none'}>
                    <Icon IconId={'frameWithCirclesLeftSmall'} height={"608"} width={"426"} viewBox={"0 0 608 426"}/>
            </SvgWrapperStyled>
            <SvgWrapperStyled  display={isMobile ? 'none' : isTablet ? 'none' : 'block'} top={isBigDesktop ? '-3%':'-5%'} left={isBigDesktop ? '69%':'65%'} fill={'none'}>
                    <Icon IconId={'frameWithCirclesRightSmall'} height={"700"} width={"820"} viewBox={"0 0 800 700"}/>
            </SvgWrapperStyled>
            <SvgWrapperStyled  display={isMobile ? 'none' : isTablet ? 'none' : isBigDesktop ? 'block':'none'} top={isBigDesktop ? '-4%':'-5%'} left={isBigDesktop ? '73%':'65%'} fill={'none'}>
                    <Icon IconId={'frameWithCirclesRightBig'} height={"730"} width={"600"} viewBox={"0 0 904 807"}/>
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
  margin-top: 160px;
  @media (max-width: 426px) {
        flex-direction: column;
        //margin-bottom: 240px;
        align-items: center;
        max-width: 95%;
        margin-top: 160px;
        
  }
  
  @media (min-width: 427px) and (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 240px;
    align-items: center;

    max-width: 95%;
    margin-top: 160px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;
        padding-left: 36px;
        gap: 120px;
        margin-top: 160px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    flex-direction: row;
    margin-top: 160px;
    gap: 90px;


  }
  @media (min-width: 1439px)  {
    flex-direction: row;
    margin-top: 160px;
    gap: 120px;
  }


`
