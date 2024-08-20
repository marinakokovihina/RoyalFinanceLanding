import React from 'react';
import styled from "styled-components";
import {Icon} from "./Icon/Icon";

export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
           <Icon IconId={'MobileMenu'} viewBox={'0 0 32 32'} width={'32'} height={'32'}/>
            <div>

            </div>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.div `
  display: none;
  @media (max-width: 426px) {
    display: block;
  }
`;
const StyledPopUp = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 375px;
  height: 384px;
`
