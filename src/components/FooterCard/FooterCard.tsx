import React from 'react';
import styled from "styled-components";
import {Icon} from "../Icon/Icon";
import {theme} from "../../styles/Theme";


type FooterCardProps = {
    idIcon ?: string,
    width?: string,
    height?: string,
    viewBox?: string,
    textH?: string,
    textP?: string
}
export const FooterCard = (props: FooterCardProps) => {
    return (
        <StyledFooterCard>
            <Icon IconId={`${props.idIcon}`} height={props.height} width={props.width} viewBox={props.viewBox}/>
            <Text>
                <StyledH6>{props.textH}</StyledH6>
                <StyledP>{props.textP}</StyledP>
            </Text>
        </StyledFooterCard>
    );
};

const Text = styled.div `
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 16px;
  display: flex;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    max-width: 80%;
    gap: 5px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;

  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    flex-direction: column;

  }

`

const StyledFooterCard = styled.div `
  background: #FFFFFF26;
  width: 390px;
  height: 194px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 20px;
  gap: 16px;
  color: ${theme.colors.fontColorWhite};
  @media (max-width: 1440px) {
    width: 95%;
    flex-direction: row;
    height: auto;

  }
  //@media (min-width: 768px) and (max-width: 1024px) {
  //  width: 30%;
  //  height: 130px;
  //  flex-direction: row;
  //
  //}
  @media (min-width: 1024px) and (max-width: 1439px) {
    flex-direction: column;
    height: 232px;

  }
`;
const StyledH6 = styled.h6 `
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  @media (max-width: 426px) {
    flex-direction: row;
    font-size: 20px;
  }
`;
const StyledP = styled.p `
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  @media (max-width: 426px) {
    width: 90%;
    font-size: 18px;

  }
`;
