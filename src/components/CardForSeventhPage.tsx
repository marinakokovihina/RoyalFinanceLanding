import React from 'react';
import {theme} from "../styles/Theme";
import styled from "styled-components";
import {Icon} from "./Icon/Icon";
type CardForSeventhPageProps = {
    iconId1?: string,
    height1?: string,
    width1?: string,
    viewBox1?: string,
    iconId2?: string,
    height2?: string,
    width2?: string,
    viewBox2?: string,
    textForTopCard?: string,

}

export const CardForSeventhPage = (props:  CardForSeventhPageProps) => {
    return (
        <CardForSeventhPageStyled>
            <TopCard>
                <Icon IconId={`${props.iconId1}`} viewBox={props.viewBox1} height={props.height1} width={props.width1}/>
                <StyledP>{props.textForTopCard}</StyledP>
            </TopCard>
            <BottomCard>
                <Icon IconId={`${props.iconId2}`} viewBox={props.viewBox2} height={props.height2} width={props.width2}/>
            </BottomCard>
        </CardForSeventhPageStyled>
    );
};

const TopCard = styled.div`
  
    width: 276px;
    height: 101px;
      display: flex;
      align-items: flex-start;
    padding: 16px;
    gap: 16px;
    background: #4168F11A;
    border-radius: 12px;
    border: 1px solid #4168F114;
    @media (max-width: 426px) {
      width: 311px;
      height: 101px;
  }
`

const StyledP = styled.p `
    max-width: 155px;
  text-align: left;
  color: ${theme.colors.fontColorSecondary};
`
const BottomCard = styled.div `

`
const Photo = styled.img `

`
const CardForSeventhPageStyled = styled.div`
    display: flex;
  flex-direction: column;
  gap: 20px;

`

