import React from 'react';
import {StyledH5} from "../../components/StyledH5/StyledH5";
import {SpanBlue} from "../../components/BlueSpan/BlueSpan";
import styled from "styled-components";
import {CardForSixthPage} from "../../components/CardForSixthPage/CardForSixthPage";
import {theme} from "../../styles/Theme";
import {useMediaQuery} from "react-responsive";
import ScrollAnimation from "react-animate-on-scroll";

export const SixthPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const defaultHeight = '273px';
    const isTablet = useMediaQuery({ minWidth: 427, maxWidth: 1024 });
    const isDesktop = useMediaQuery({ minWidth: 1023, maxWidth: 1439 });

    return (
        <SixthPageStyled>
            <ScrollAnimation   animateIn="animate__fadeIn"
                               animateOnce={true}
                               duration={1}
                               delay={20}
                               offset={100}>
            <StyledH5>Широкий выбор <SpanBlue>способов оплаты</SpanBlue></StyledH5>
            </ScrollAnimation>

            <CardsListforSixthPage>
                <ScrollAnimation   animateIn="animate__fadeInUp"
                                   animateOnce={true}
                                   duration={1}
                                   delay={200}
                                   offset={100}>
                <CardForSixthPage background={'linear-gradient(72.48deg, #F0F2FF 0%, #FAFBFF 100%)'}
                iconId={'ptop'} height={isMobile ? '80' :'100'} width={isMobile ? '80' :'100'} viewBox={'0 0 100 100'}
                textP={'Переводы от других людей с помощью банковских карт'}
                textH5={'P2P'} colorTextP={theme.colors.fontColorSecondary} heightDiv={isMobile ? '141px' : defaultHeight}
                />
                </ScrollAnimation>
                <ScrollAnimation   animateIn="animate__fadeInUp"
                                   animateOnce={true}
                                   duration={1}
                                   delay={200}
                                   offset={100}>
                <CardForSixthPage background={'linear-gradient(72.48deg, #F0F2FF 0%, #FAFBFF 100%)'}
                iconId={'ecom'} height={isMobile ? '80' :'100'} width={isMobile ? '80' :'100'} viewBox={'0 0 100 100'}
                textP={'Прием платежей от ваших клиентов с помощью банковских карт'}
                textH5={'eCom'} colorTextP={theme.colors.fontColorSecondary} heightDiv={isMobile ? '164px' : defaultHeight}
                />
                </ScrollAnimation>
                <ScrollAnimation   animateIn="animate__fadeInUp"
                                   animateOnce={true}
                                   duration={1}
                                   delay={200}
                                   offset={100}>
                <CardForSixthPage background={'linear-gradient(72.48deg, #F0F2FF 0%, #FAFBFF 100%)'}
                iconId={'qrSbp'} height={isMobile ? '80' :'100'} width={isMobile ? '80' :'100'} viewBox={'0 0 100 100'}
                textP={'Прием платежей от ваших клиентов с помощью QR-кода СБП'}
                textH5={'QR СБП'} colorTextP={theme.colors.fontColorSecondary} heightDiv={isMobile ? '164px' : defaultHeight}
                />
                </ScrollAnimation>
                <ScrollAnimation   animateIn="animate__fadeInUp"
                                                      animateOnce={true}
                                                      duration={1}
                                                      delay={200}
                                                      offset={100}>

                <CardForSixthPage background={'linear-gradient(72.48deg, #F0F2FF 0%, #FAFBFF 100%)'}
                iconId={'qrSber'} height={isMobile ? '80' :'100'} width={isMobile ? '80' :'100'} viewBox={'0 0 100 100'}
                textP={'Прием платежей от ваших клиентов с помощью QR-кода СберБанка'} heightDiv={isMobile ? '164px' : defaultHeight}
                textH5={'QR СБЕР'} colorTextP={theme.colors.fontColorSecondary}
                />
                </ScrollAnimation>
            </CardsListforSixthPage>
        </SixthPageStyled>
    );

};
const SixthPageStyled = styled.div `
    margin-top: 240px;
    @media (max-width: 426px) {
      margin-top: 120px;
      padding-left: 0px;
    }
  @media (min-width: 427px) and (max-width: 1024px) {
    margin-top: 160px;
    width: 90%;

  }
`;
const CardsListforSixthPage = styled.div `
display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 80px;
  @media (max-width: 426px) {
    flex-direction: column;
  }
  @media (min-width: 427px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
  }@media (min-width: 102px) and (max-width: 1439px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
  
`;
