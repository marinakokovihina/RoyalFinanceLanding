import React from 'react';
import {Logo} from "../../components/Logo/Logo";
import {Menu} from "../../components/menu/Menu";
import styled from "styled-components";
import {Button} from "../../components/Button/Button";
import {theme} from "../../styles/Theme";
import {MobileMenu} from "../../components/MobileMenu";
import {useMediaQuery} from "react-responsive";

export const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: 400 });

    return (
        <StyledWrapHeader>
            <StyledHeader>
                <MobileMenu/>
                <Logo />
                <Menu/>

                <Button  width={'238px'} height = {'48px'}
                         text={'Связаться с нами'} borderRadius={'12px'} iconId={'tgIcon'}
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
  z-index: 2;
  position: relative;
  background-color: #FFFFFF80;
  margin-bottom: 80px;
  @media (max-width: 426px) {
    margin-bottom: 80px;

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
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 2;
  @media (max-width: 426px) {
    width: 100vw;
    gap: 24px;
    justify-content: start;
    height: 64px;
    padding-top: 16px;
    padding-left: 12px;
  }
`;
