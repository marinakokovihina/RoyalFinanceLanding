import React from 'react';
import styled from "styled-components";
import {CardForThirdPage} from "../../components/CardForThirdPage/CardForThirdPage";
import {SpanBlue} from "../../components/BlueSpan/BlueSpan";
import {Icon} from "../../components/Icon/Icon";
import {SvgWrapperStyled} from "../../components/SvgWrapper/SvgWrapper";
import {useMediaQuery} from "react-responsive";
import ScrollAnimation from "react-animate-on-scroll";
import game from "../../assets/img/game.png"
import services from "../../assets/img/services.png"
import cards from "../../assets/img/cards.png"
import marketing from "../../assets/img/marketing.png"
import {animationMode} from "../../store/type";


export const ThirdPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <ThirdSection id = "features">
            <IconDiv>
                <SvgWrapperStyled display={isMobile ? 'none' : 'block'} top='2055px' left={'-15%'}>
                    <Icon IconId='circleForMan' height='748' width='538' viewBox='0 0 538 748'/>
                </SvgWrapperStyled
                ><ScrollAnimation   animateIn="animate__fadeInUp"
                                    animateOnce={animationMode}
                                    duration={1}
                                    delay={300}
                                    offset={10}  >
                <StyledH5ThirdPage> Решаем <SpanBlue> любые задачи </SpanBlue></StyledH5ThirdPage>
            </ScrollAnimation>
            </IconDiv>
            <Container>
                <LeftColumn>
                    <ScrollAnimation   animateIn="animate__fadeInUp"
                                       animateOnce={animationMode}
                                       duration={1}
                                       delay={300}
                                       offset={10}  >
                    <Icon IconId={'goodMan'} height={'308'} width={'308'} viewBox={'0 0 308 308'}/>
                    </ScrollAnimation>
                    <StyledH5ThirdPageMob> Решаем <SpanBlue> любые задачи </SpanBlue> </StyledH5ThirdPageMob>
                </LeftColumn>

                <RightColumn>
                <GroupOfCardForThirdPage>
                    <ScrollAnimation   animateIn="animate__fadeInUp"
                                       animateOnce={animationMode}
                                       duration={1}
                                       delay={300}
                                       offset={10}  >
                   <CardForThirdPage heightDiv={isMobile ? '189px' :'193px' } iconId={game} textH5='Ключи для игр' textP='Покупка ключей на любых игровых платформах, независимо от территориальных ограничений'
                            height='80' width='80' viewBox='0 0 80 80'
                   />
                    </ScrollAnimation>
                    <ScrollAnimation   animateIn="animate__fadeInUp"
                                       animateOnce={animationMode}
                                       duration={1}
                                       delay={300}
                                       offset={10}  >
                    <CardForThirdPage heightDiv={isMobile ? '189px' :'193px' } iconId={services} textH5='Подписки на сервисы' textP='Оплата подписок на сервисы, непринимающие оплату на территории вашей страны'
                            height='80' width='80' viewBox='0 0 80 80'
                   />
                    </ScrollAnimation>
                    <ScrollAnimation   animateIn="animate__fadeInUp"
                                       animateOnce={animationMode}
                                       duration={1}
                                       delay={500}
                                       offset={10}  >
                    <CardForThirdPage heightDiv={isMobile ? '166px' :'170px' } iconId={cards} textH5='Гемблинг'
                                      textP='Переводы в сфере азартных игр (онлайн-казино, покер, слоты)'
                            height='80' width='80' viewBox='0 0 80 80'
                   />
                    </ScrollAnimation>
                    <ScrollAnimation   animateIn="animate__fadeInUp"
                                       animateOnce={animationMode}
                                       duration={1}
                                       delay={500}
                                       offset={10}  >
                    <CardForThirdPage  heightDiv={isMobile ? '166px' :'170px' } iconId={marketing} textH5='Оплата рекламы'
                                      textP='Безопасные переводы для оплаты рекламных компаний'
                            height='80' width='80' viewBox='0 0 80 80'
                   />
                    </ScrollAnimation>
                </GroupOfCardForThirdPage>
            </RightColumn>
        </Container>
        </ThirdSection>
    );
};

const Container = styled.div`
  display: flex;
  gap: 134px;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 40px;

  }
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 80px;

  }

`;
const LeftColumn = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
   
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;

  }
`;
const RightColumn = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
`;
const GroupOfCardForThirdPage = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px 40px;
  @media (max-width: 767px) {
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
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 767px) and (max-width: 1024px) {
    width: auto;
    display: none;


  }
`;
const StyledH5ThirdPageMob = styled.h5 `
 
  display: none;
  
  @media (max-width: 767px) {
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
  @media (min-width: 768px) and (max-width: 1023px) {
    display: block;
    font-size: 40px;


  }
`;
const ThirdSection = styled.div `
  margin-left: 2%;

  @media (max-width: 426px) {
    margin-left: 12px;
    display: flex;
    padding-top: 60px;
    margin-top: 60px;
  }
  @media (min-width: 427px) and (max-width: 1024px) {
    align-items: flex-start;
    max-width: 760px;
    padding-top: 60px;
    margin-top: 60px;
  }
  padding-top: 120px;
  margin-top: 120px;

`;
const IconDiv = styled.div `

  @media (max-width: 426px) {


  } 
`
