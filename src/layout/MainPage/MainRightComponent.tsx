import React from 'react';
import styled from "styled-components";
import {CardUp} from "../../components/CardForMain/CardUp";
import {CardForLeftColumn} from "../../components/CardForMain/CardForLeftColumn";
import {CardBottom} from "../../components/CardForMain/CardBottom";
import {theme} from "../../styles/Theme";
import {useMediaQuery} from "react-responsive";



export const MainRightComponent = () => {
    const isSmallMobile = useMediaQuery({ maxWidth: 374 });
    const isMobile = useMediaQuery({ minWidth: 375, maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    // const isDesktop = useMediaQuery({ minWidth: 1024 });

    return (
        <StyledMainRightComponent>
            <StyledCardGroup>
                <CardForLeftColumn height={isMobile ? '210px':   isSmallMobile ? '252px' : isTablet ? '112px' : '226px'} width={isMobile ? '351px' : isSmallMobile ? '320px':  isTablet ? '696px' : '307px'} background='#FFFFFF80;' border='1px solid #F1F1F4'
                    boxShadow='inset 0px 0px 12px rgba(255, 255, 255, 0.08)' backdropFilter='blur(7.5px)'
                />
                <GroupCards>
                    <CardUp
                        background={theme.colors.colorForCardGreen} width={isMobile ? '351px':  isSmallMobile ? '320px': isTablet ? '336px' : '305px'} height={isMobile ? '252px' :   isSmallMobile ? '252px':  isTablet ? '264px'  : '272px'} colorH4={theme.colors.fontColorWhite}
                        colorP={theme.colors.fontColorWhite}/>
                    <CardBottom background={theme.colors.colorForCardBlue} width={isMobile ? '351px' :  isSmallMobile ? '320px': isTablet ? '336px' :'307px'} height={isMobile ? '232px':   isSmallMobile ? '252px' : isTablet ? '264px'   : '280px'}/>
                </GroupCards>
            </StyledCardGroup >
        </StyledMainRightComponent>
    );
};


const StyledMainRightComponent = styled.div `
    //margin-left: 6%;
   //margin-right: 2%;


  @media (max-width: 767px) {
    margin-top: 40px;
    //margin-left: 3%;

    margin-right: 0%;

  }
  @media (min-width: 768px) and (max-width: 1024px) {
    
    //margin-left: 0;
  }
`
const StyledCardGroup = styled.div `
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    
    flex-direction: column;
    align-items: center;

  }
  @media (min-width: 768px) and (max-width: 1024px) {
  
  flex-direction: column;
    align-items: flex-start;
  }
`

const GroupCards = styled.div `
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: center;

  }
  //@media (min-width: 768px) and (max-width: 1023px) {
  //  flex-direction: column;
  //
  //}
  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;

  }
`
