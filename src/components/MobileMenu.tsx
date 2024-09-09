import React, {useState} from 'react';
import styled from "styled-components";
import {Icon} from "./Icon/Icon";
import {theme} from "../styles/Theme";
import {Logo} from "./Logo/Logo";
import {Menu} from "./menu/Menu";
import {useMediaQuery} from "react-responsive";
import {Button} from "./Button/Button";

export const MobileMenu = () => {
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);
    const clickPopUp = () => {
        setIsPopUpVisible(!isPopUpVisible);
    }
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    return (
        <StyledMobileMenu>
            <Icon onClick={clickPopUp} IconId={'MobileMenu'} viewBox={'0 0 32 32'} width={'32'} height={'32'} />
            {isPopUpVisible && (
                <StyledPopUp>
                    <MenuBar>
                        <Icon onClick={clickPopUp} IconId={'closeMenu'} viewBox={'0 0 32 32'} width={'32'} height={'32'} />
                        <Logo />
                        <Button  onClick = {() => { window.open("https://t.me/Rockefeller_017", "_blank");    }}
                                 width={isTablet ?  ' 234px' :'335px'} height = {'48px'}
                                 text={'Связаться с нами'} borderRadius={'12px'} iconId={'tgIcon'}
                                 background={'linear-gradient(270deg, #4168F1 30%, #3846BE 100%)'}
                                 widthIcon={'24'} heightIcon={'24'} viewBoxIcon={'0 0 24 24'}
                                 color={`${theme.colors.fontColorWhite}`} gap={'12px'}
                                 display={isMobile ? 'none' : isTablet ? 'flex' : 'none'}
                        />
                    </MenuBar>
                    <NavBar>
                        <Menu display={isMobile ? 'block' : isTablet ? 'block' : 'none'}/>
                        <Button  onClick = {() => { window.open("https://t.me/Rockefeller_017", "_blank");    }}
                                  height = {'48px'}
                                 text={'Связаться с нами'} borderRadius={'12px'} iconId={'tgIcon'}
                                 background={'linear-gradient(270deg, #4168F1 30%, #3846BE 100%)'}
                                 widthIcon={'24'} heightIcon={'24'} viewBoxIcon={'0 0 24 24'}
                                 color={`${theme.colors.fontColorWhite}`} gap={'12px'}
                                 display={isMobile ? 'flex' : isTablet ? 'none' : 'none'}
                        />
                    </NavBar>
                </StyledPopUp>
            )}
        </StyledMobileMenu>
    );
};

const NavBar = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;
const MenuBar = styled.div`
  padding: 16px 20px;
  flex-direction: row;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 24px;
  @media (min-width: 427px) and (max-width: 1024px) {
    padding-left: 25px;
  }
`;
//todo fix menu
const StyledMobileMenu = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 16px 30px;
    flex-direction: row;
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 24px;
    // background-color: ${theme.colors.fontColorWhite};
    
  }
  @media (min-width: 1024px)  {
  svg{
    margin-left: -1%;
  }
    @media (min-width: 1024px) and (max-width: 1440px) {
      //background: ${theme.colors.fontColorWhite};


    }
  }
  
 
`;

const StyledPopUp = styled.div`
  @media (max-width: 767px) {
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    background: ${theme.colors.fontColorWhite};
    //width: 100%;
    border-radius: 20px;
    height: 384px;
    z-index: 3;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-left: 0;
    max-height: 372px;
    min-width: 100%;
    z-index: 44;
    //margin-top: 25%;
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    background: ${theme.colors.fontColorWhite};
    border-radius: 20px;
    height: 384px;
]

  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    margin-top: 19%;

  }
`;
