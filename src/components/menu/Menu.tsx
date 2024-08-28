import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
type MenuProps = {
    display?: string,
}
export const Menu = (props: MenuProps) => {

    const Scroll = (div: string) => {
        const featuresElement = document.getElementById(div);
        if (featuresElement) {
            featuresElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

        }
    };




    return (
        <StyledMenu display={props.display}>
            <StyledUl>
                <li onClick={() =>  Scroll('possibilities') }>Возможности</li>
                <li onClick={() =>  Scroll('features')}>Преимущества</li>
                <li onClick={() => Scroll('safety')}>Безопасность</li>
                <li onClick={() => Scroll('regions')}>Регионы</li>
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
  @media (min-width: 1024px) and (max-width: 1440px) {
    background: ${theme.colors.fontColorWhite};


  }
`
const StyledMenu = styled.menu <MenuProps>`
  display: ${props => props.display};
  
`
