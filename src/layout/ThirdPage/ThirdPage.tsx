import React from 'react';
import styled from "styled-components";
import {CardForThirdPage} from "../../components/CardForThirdPage/CardForThirdPage";
import {SpanBlue} from "../../components/BlueSpan/BlueSpan";
import {Icon} from "../../components/Icon/Icon";
import {SvgWrapperStyled} from "../../components/SvgWrapper/SvgWrapper";
import {useMediaQuery} from "react-responsive";

export const ThirdPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <ThirdSection>
            <IconDiv>
                <SvgWrapperStyled display={isMobile ? 'none' : 'block'} top='2055px'>
                    <Icon IconId='circleForMan' height='748' width='298' viewBox='0 0 298 748'/>
                </SvgWrapperStyled>
                <StyledH5ThirdPage> Решаем <SpanBlue> любые задачи </SpanBlue></StyledH5ThirdPage>
            </IconDiv>
            <Container>
            <LeftColumn>
                <Icon IconId={'goodMan'} height={'308'} width={'308'} viewBox={'0 0 308 308'}/>
                <StyledH5ThirdPageMob> Решаем <SpanBlue> любые задачи </SpanBlue> </StyledH5ThirdPageMob>
            </LeftColumn>

            <RightColumn>
                <GroupOfCardForThirdPage>
                   <CardForThirdPage heightDiv={isMobile ? '189px' :'193px' } iconId='game' textH5='Ключи для игр' textP='Покупка ключей на любых игровых платформах, независимо от территориальных ограничений'
                            height='80' width='80' viewBox='0 0 80 80'
                   />
                    <CardForThirdPage heightDiv={isMobile ? '189px' :'193px' } iconId='services' textH5='Подписки на сервисы' textP='Оплата подписок на сервисы, непринимающие оплату на территории вашей страны'
                            height='80' width='80' viewBox='0 0 80 80'
                   />
                    <CardForThirdPage heightDiv={isMobile ? '166px' :'170px' } iconId='gameCards' textH5='Гемблинг'
                                      textP='Переводы в сфере азартных игр (онлайн-казино, покер, слоты)'
                            height='80' width='80' viewBox='0 0 80 80'
                   />
                    <CardForThirdPage  heightDiv={isMobile ? '166px' :'170px' } iconId='marketing' textH5='Оплата рекламы'
                                      textP='Безопасные переводы для оплаты рекламных компаний'
                            height='80' width='80' viewBox='0 0 80 80'
                   />
                </GroupOfCardForThirdPage>
            </RightColumn>
        </Container>
        </ThirdSection>
    );
};

const Container = styled.div`
  display: flex;
  gap: 134px;
  @media (max-width: 426px) {
    flex-direction: column;
    gap: 40px;

  }
  
`;
const LeftColumn = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: center;
  @media (max-width: 426px) {
    display: block;
  }
`;
const RightColumn = styled.div``;
const GroupOfCardForThirdPage = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px 40px;
  @media (max-width: 426px) {
    display: flex;
    flex-direction: column;
    gap: 64px;

  }
`;
const StyledH5ThirdPage = styled.h5 `
  font-style: normal;
  margin-left: 11%;
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 80px;
  @media (max-width: 426px) {
    display: none;
  }
`;
const StyledH5ThirdPageMob = styled.h5 `
 
  display: none;
  
  @media (max-width: 426px) {
    display: block;
    font-size: 32px;
    padding-top: 40px;
    line-height: 40px ;
    font-style: normal;
    text-align: left;
    font-weight: 600;
    margin-bottom: 40px;
    max-width: 350px;
    
  }
`;
const ThirdSection = styled.div `
  @media (max-width: 426px) {
  
  }
`;
const IconDiv = styled.div `

  @media (max-width: 426px) {
    
   
  } 
`
