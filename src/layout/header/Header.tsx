import React from 'react';
import {Logo} from "../../components/Logo/Logo";
import {Menu} from "../../components/menu/Menu";
import styled from "styled-components";
import {Button} from "../../components/Button/Button";
import {theme} from "../../styles/Theme";
import {MobileMenu} from "../../components/MobileMenu";
import {useMediaQuery} from "react-responsive";

export const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: 426 });
    const isTablet = useMediaQuery({ minWidth: 427, maxWidth: 1024 });
    const isDesktop = useMediaQuery({ minWidth: 1025, maxWidth: 1440 });
    return (
        <StyledWrapHeader>
            <StyledHeader>
                <MobileMenu/>
                <Logo />
                <Menu display={isMobile ? 'none' : isTablet ? 'none' : isDesktop ? 'none': 'block'}/>
                <Button   onClick = {() => { window.open("https://t.me/Rockefeller_017", "_blank");    }}
                          width={isTablet ?  ' 234px' :'335px'} height = {'48px'}
                          text={'Связаться с нами'} borderRadius={'12px'}
                          iconId={'tgIcon'}
                          background={'linear-gradient(270deg, #4168F1 30%, #3846BE 100%)'}
                          widthIcon={'24'} heightIcon={'24'} viewBoxIcon={'0 0 24 24'}
                          color={`${theme.colors.fontColorWhite}`} gap={'12px'}
                          display={isMobile ? 'none' : 'flex'}

                />
            </StyledHeader>
        </StyledWrapHeader>

);
};

const StyledWrapHeader = styled.div`
  width: 100%;
  //max-width: 1430px;
  z-index: 99;
  position: fixed;
  top: 0;
  
  left: 0;
  margin-bottom: 80px;
  
  @media (max-width: 426px) {
    margin-bottom: 80px;
    min-width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  @media (min-width: 427px) and (max-width: 1024px) {
    min-width: 100%;
    padding-left: 0;
    position: fixed;
    top: 0;
    left: 0;
  }
`
const StyledHeader = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 106px;
  max-height: 80px;
  max-width: 1296px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(40px);  z-index: 2;
  @media (max-width: 426px) {
    width: 100%;
    gap: 24px;
    justify-content: start;
    height: 64px;
    padding-top: 16px;
    padding-left: 0;
  }
  @media (min-width: 427px) and (max-width: 1024px) {
    width: 100%;
    justify-content: start;
    gap: 10px;
    padding-left: 0;




  } @media (min-width: 1024px) and (max-width: 1439px) {
    gap: 30px;
  width: 100%;
  justify-content: start;
  padding-left: 0;
}
  @media (min-width: 1800px) {
    margin-left: -7%;
    
  }
`;
