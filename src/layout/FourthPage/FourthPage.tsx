import React from 'react';
import styled from "styled-components";
import {CardForFourthPage} from "../../components/CardForFourthPage/CardForFourthPage";
import {SpanGreen} from "../../components/GreenSpan/GreenSpan";
import {theme} from "../../styles/Theme";
import {Icon} from "../../components/Icon/Icon";
import {useMediaQuery} from "react-responsive";
import ScrollAnimation from "react-animate-on-scroll";
import {SvgWrapperStyled} from "../../components/SvgWrapper/SvgWrapper";
import {animationMode} from "../../store/type";
import microbe from "../../assets/img/Microbe.png"
import {Image} from "../../components/Image/Image";



export const FourthPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isMobilePlus = useMediaQuery({ maxWidth: 1025 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <FourthPageStyled id = "safety">
            <ScrollAnimation   animateIn={isMobilePlus ?  'animate__fadeIn' : "animate__fadeInUp"}
                               animateOnce={animationMode}
                               duration={1}
                               delay={100}
                               offset={10}  >
            <StyledH5><SpanGreen> Безопасность </SpanGreen>хранения и переводов</StyledH5>
            </ScrollAnimation>
        <Container>
            <LeftColumn>
                <ScrollAnimation   animateIn={isMobilePlus ?  'animate__fadeIn' :"animate__fadeInTopLeft"}
                                   animateOnce={animationMode}
                                   duration={1}
                                   delay={1}
                                   offset={60}  >
                <CardForFourthPage iconId={'lock'} width={isMobile ? '80' : '100'} height={isMobile ? '80' : '100'} viewBox={'0 0 100 100'}
                    colorTextH5 = {theme.colors.fontColorWhite} colorTextP={theme.colors.fontColorWhite} textH5={'Надежный прием фиатных средств'}
                                   background={theme.colors.colorForCardGreen} textP={'Безопасные транзакции для вашего бизнеса с поддержкой множества валют '}/>
                </ScrollAnimation>
                <ScrollAnimation   animateIn={isMobilePlus ?  'animate__fadeIn' :"animate__fadeInTopRight"}
                                   animateOnce={animationMode}
                                   duration={1}
                                   delay={1}
                                   offset={60}  >
                <CardForFourthPage iconId = {'wallet'} width={isMobile ? '80' : '100'} height={isMobile ? '80' : '100'} viewBox={'0 0 100 100'}
                                   colorTextH5 = {theme.colors.fontPrimary} colorTextP={theme.colors.fontColorSecondary}
                                   textH5={'Холодные кошельки'} background={theme.colors.colorForCardGreyGreen} textP={'Обеспечивают максимальную безопасность для хранения ваших криптовалютных активов'}/>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn={isMobilePlus ?  'animate__fadeIn' :"animate__fadeInBottomLeft"}
                                   animateOnce={animationMode}
                                   duration={1}
                                   delay={1}
                                   offset={40}  >
                <CardForFourthPage iconId = {'handsWithTether'} width={isMobile ? '80' : '100'} height={isMobile ? '80' : '100'} viewBox={'0 0 100 100'}
                    colorTextH5 = {theme.colors.fontPrimary} colorTextP={theme.colors.fontColorSecondary} textH5={'Безопасные выводы для всех клиентов'}
                                   background={theme.colors.colorForCardGreyGreen} textP={'Каждый запрос обрабатывается индивидуально, что позволяет обеспечить максимальную защиту ваших средств.'}/>
                </ScrollAnimation>
                <ScrollAnimation   animateIn={isMobilePlus ?  'animate__fadeIn' :"animate__fadeInBottomRight"}
                                   animateOnce={animationMode}
                                   duration={1}
                                   delay={1}
                                   offset={40}  >
                    <CardForFourthPage iconId={'TPlusZero'} width={isMobile ? '80' : '100'} height={isMobile ? '80' : '100'} viewBox={'0 0 100 100'}
                    colorTextH5 = {theme.colors.fontColorWhite} colorTextP={theme.colors.fontColorWhite} textP={'Быстрый вывод день в день без блокировок и удержания средств на вашем счете '}
                                   textH5={'Отсутствие роллинга и холдинга средств'} background={theme.colors.colorForCardGreen}/>
                </ScrollAnimation>
            </LeftColumn>
            <RightColumn>
                <ScrollAnimation   animateIn="animate__fadeIn"
                                   animateOnce={animationMode}
                                   duration={1}
                                   delay={1}
                                   offset={10}  >
                    {!isTablet && (
                        <Image src={microbe} height={isMobile ? '240px' : isTablet ? '336px':  isDesktop ? '600px' : '601px'} width={isMobile ? '240px': isTablet ? '336px' :isDesktop ? '600px' :'601px'}/>
                        // <Icon IconId={'spider'} viewBox={'0 0 601 601'} height={isMobile ? '240' : isTablet ? '336':  '601'} width={isMobile ? '240': isTablet ? '336'  :'601'}/>
                    )}
                    {isTablet && (
                       <Image src = {microbe} height = {isMobile ? '240px' : isTablet ? '336px':  isDesktop ? '600px' : '601px'} width={isMobile ? '240px': isTablet ? '336px' :isDesktop ? '600px' :'601px'}/>)
                    }
                </ScrollAnimation>
                <StyledH5Mob><SpanGreen> Безопасность </SpanGreen>хранения и переводов</StyledH5Mob>

            </RightColumn>
        </Container>
        </FourthPageStyled>
    );
};
const FourthPageStyled = styled.div `
  padding-top: 120px;
  margin-top: 120px;
  margin-left: 2%;

  text-align: left;
  @media (max-width: 767px) {
    margin-top: 120px;
    display: flex;
    align-items: center;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    margin-top: 80px;
    padding-top: 80px;

  }

`
const Container = styled.div `
padding: 0;
  display: flex;
  gap: 96px;
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    gap: 0;
    max-width: 351px;
    align-items: center;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    flex-direction: column-reverse;

  }
`;
const LeftColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  @media (max-width: 767px) {
    display: flex;
    gap: 24px;

    flex-direction: column;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    margin-left: 5%;  } 
  @media (min-width: 1025px) and (max-width: 1439px) {
    align-items: center;
    gap: 40px;
    max-width: 60%;
    justify-content: center;
    margin-left: 5%;  }
`;
const RightColumn = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    justify-content: center;

  }
  @media (min-width: 768px) and (max-width: 1439px) {
    flex-direction: row-reverse;
    display: flex;
    justify-content: start;
    gap: 0px;
    align-items: center;

  }
  
`;
const StyledH5 = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 60px;
  @media (max-width: 767px) {
   display: none; 
      

  }
  @media (min-width: 446px) and (max-width: 1439px) {
    display: none;
    

  }
`;
const StyledH5Mob = styled.h5`
  
  display: none;

  @media (max-width: 767px) {
    display: block;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 40px;
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: 40px;
    max-width: 35%;
    display: block;


  }
  @media (min-width: 1440px)  {
    max-width: 100%;
    font-size: 48px;


  }
`;
