import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Menu = () => {
    // TODO ДОБАВИТЬ СКРОЛЛЫ


    return (
        <StyledMenu>
            <StyledUl>
                <li onClick={() => console.log('scroll')}>Возможности</li>
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
`
const StyledMenu = styled.menu `
  display: block;
  @media (max-width: 426px) {
    display: none;
  }
`
