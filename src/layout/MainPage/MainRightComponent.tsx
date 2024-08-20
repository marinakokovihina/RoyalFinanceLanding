import React from 'react';
import styled from "styled-components";
import {CardUp} from "../../components/CardForMain/CardUp";
import {CardForLeftColumn} from "../../components/CardForMain/CardForLeftColumn";
import {CardBottom} from "../../components/CardForMain/CardBottom";
import {theme} from "../../styles/Theme";
import {useMediaQuery} from "react-responsive";



export const MainRightComponent = () => {
    const isMobile = useMediaQuery({ maxWidth: 400 });

    return (
        <StyledMainRightComponent>
            <StyledCardGroup>
                <CardForLeftColumn height={isMobile ? '210px' : '226px'} width={isMobile ? '351px' : '307px'} background='#FFFFFF80;' border='1px solid #F1F1F4'
                    boxShadow='inset 0px 0px 12px rgba(255, 255, 255, 0.08)' backdropFilter='blur(7.5px)'
                />
                <GroupCards>
                    <CardUp
                        background={theme.colors.colorForCardGreen} width={isMobile ? '351px' : '305px'} height={isMobile ? '252px' : '272px'} colorH4={theme.colors.fontColorWhite}
                        colorP={theme.colors.fontColorWhite}/>
                    <CardBottom background={theme.colors.colorForCardBlue} width={isMobile ? '351px' : '307px'} height={isMobile ? '232px' : '280px'}/>
                </GroupCards>
            </StyledCardGroup >
        </StyledMainRightComponent>
    );
};


const StyledMainRightComponent = styled.div `
    margin-left: 94px;
  @media (max-width: 426px) {
    margin-left: 12px;
  }
`
const StyledCardGroup = styled.div `
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  @media (max-width: 426px) {
    
    flex-direction: column;
    align-items: flex-start;

  }
`

const GroupCards = styled.div `
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 426px) {
    flex-direction: column-reverse;
  }
`
