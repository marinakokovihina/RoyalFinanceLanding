import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
type MenuProps = {
    display?: string,
}
export const Menu = (props: MenuProps) => {

    const ScrollToRegions = () => {
        const isMobile = window.innerWidth < 426;
        const isTablet = window.innerWidth < 768;

        const scrollAmount = isMobile ? 1000 : 500;
        window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
        });
    }




    return (
        <StyledMenu display={props.display}>
            <StyledUl>
                <li onClick={ScrollToRegions }>Возможности</li>
                <li onClick={() => console.log('scroll')}>Преимущества</li>
                <li onClick={() => console.log('scroll')}>Безопасность</li>
                <li onClick={() => console.log('scroll')}>Регионы</li>
            </StyledUl>
        </StyledMenu>
    );
};

const StyledUl = styled.ul `
  display: flex;
  gap: 60px;
  color: ${theme.colors.fontColorSecondary};
  font-weight: 400;
  font-size: 18px;
  @media (max-width: 426px) {
    flex-direction: column;
    text-align: start;
    gap: 16px;
  }
  @media (min-width: 427px) and (max-width: 1024px) {
    flex-direction: column;
    text-align: start;
    gap: 16px;

  }
`
const StyledMenu = styled.menu <MenuProps>`
  display: ${props => props.display};
  
`
