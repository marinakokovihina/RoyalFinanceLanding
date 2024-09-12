import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {CardForCustomDiv} from "./CardForCustomDiv";
import pencil from "./../../assets/img/pencil.png"
import picture from "./../../assets/img/picture.png"
import email from "./../../assets/img/email.png"


type CustomDivForSeventhPageProps = {
    display?: string,
}
export const CustomDivForSeventhPage = (props: CustomDivForSeventhPageProps) => {
    return (
        <StyledDiv display={props.display}>
            <StyledH4>Кастомизация формы оплаты</StyledH4>
            <StyledP>Настройка платежной страницы под ваши цели и нужды клиентов</StyledP>
            <GroupOfCard>
                <CardForCustomDiv widthDiv={'143px'} iconId={picture} viewBox={'0 0 20 21'} height={'21'} width={'20'} text={'Логотип'} />
                <CardForCustomDiv widthDiv={'156px'} iconId={pencil} viewBox={'0 0 22 21'} height={'21'} width={'22'} text={'Название'}/>
                <CardForCustomDiv widthDiv={'260px'} iconId={email} viewBox={'0 0 20 21'} height={'20'} width={'21'} text={'Контакты поддержки'}/>
            </GroupOfCard>
            <GroupOfCardMob>
                <Item1>
                    <CardForCustomDiv widthDiv={'135px'} iconId={picture} viewBox={'0 0 20 21'} height={'21'} width={'20'} text={'Логотип'} />
                    <CardForCustomDiv widthDiv={'148px'} iconId={pencil} viewBox={'0 0 22 21'} height={'21'} width={'22'} text={'Название'}/>
                  </Item1>
                <Item2>
                    <CardForCustomDiv widthDiv={'252px'} iconId={email} viewBox={'0 0 20 21'} height={'20'} width={'21'} text={'Контакты поддержки'}/>
                </Item2>
            </GroupOfCardMob>
        </StyledDiv>
    );
};


const StyledH4 = styled.h4`
  max-width: 200px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${theme.colors.fontColorWhite};
  @media (max-width: 1023px) {
    font-size: 20px;
    line-height: 28px;
    max-width: 100%;


  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 20px;
    max-width: 100%;

  }
`
const StyledP = styled.p`
 
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${theme.colors.fontColorWhite};
  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 23px;

  }

  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: 18px;

  }
`
const StyledDiv = styled.div <CustomDivForSeventhPageProps> `
  text-align: left;
  display: ${props => props.display || 'flex'};
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 24px;
  width: 306px;
  height: 382px;
  background: ${theme.colors.colorForCardBlue};
  border-radius: 20px;
  @media (max-width: 1439px) {
    width: 345px;
    height: 248px;
    gap: 24px;
    padding: 16px;
  }
  @media (min-width: 767px) and (max-width: 1023px) {
    height: 100%;

  }@media (min-width: 1024px) and (max-width: 1439px) {
    height: 205px;
  width: 632px;

  }
  @media (max-width: 322px) {width: 322px}


`;
const Item1 = styled.div `
    display: flex;
  flex-direction: row;
  gap: 16px;
  
    `
const Item2 = styled.div ``
const GroupOfCardMob = styled.div `

  display: none;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`
const GroupOfCard = styled.div `
    display: flex;
    flex-direction: column;
    gap: 16px;
      @media (max-width: 767px) {
        display: none;
      }
  @media (min-width: 1024px) and (max-width: 1439px) {
   flex-direction: row;

  }


`
