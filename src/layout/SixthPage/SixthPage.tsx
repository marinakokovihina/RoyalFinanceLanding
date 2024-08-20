import React from 'react';
import {StyledH5} from "../../components/StyledH5/StyledH5";
import {SpanBlue} from "../../components/BlueSpan/BlueSpan";
import styled from "styled-components";
import {CardForFourthPage} from "../../components/CardForFourthPage/CardForFourthPage";
import {CardForSixthPage} from "../../components/CardForSixthPage/CardForSixthPage";
import {theme} from "../../styles/Theme";
import {useMediaQuery} from "react-responsive";

export const SixthPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const defaultHeight = '273px';
    return (
        <SixthPageStyled>
            <StyledH5>Широкий выбор <SpanBlue>способов оплаты</SpanBlue></StyledH5>
            <CardsListforSixthPage>
                <CardForSixthPage background={'linear-gradient(72.48deg, #F0F2FF 0%, #FAFBFF 100%)'}
                iconId={'ptop'} height={isMobile ? '80' :'100'} width={isMobile ? '80' :'100'} viewBox={'0 0 100 100'}
                textP={'Переводы от других людей с помощью банковских карт'}
                textH5={'P2P'} colorTextP={theme.colors.fontColorSecondary} heightDiv={isMobile ? '141px' : defaultHeight}
                />
                <CardForSixthPage background={'linear-gradient(72.48deg, #F0F2FF 0%, #FAFBFF 100%)'}
                iconId={'ecom'} height={isMobile ? '80' :'100'} width={isMobile ? '80' :'100'} viewBox={'0 0 100 100'}
                textP={'Прием платежей от ваших клиентов с помощью банковских карт'}
                textH5={'eCom'} colorTextP={theme.colors.fontColorSecondary} heightDiv={isMobile ? '164px' : defaultHeight}
                />
                <CardForSixthPage background={'linear-gradient(72.48deg, #F0F2FF 0%, #FAFBFF 100%)'}
                iconId={'qrSbp'} height={isMobile ? '80' :'100'} width={isMobile ? '80' :'100'} viewBox={'0 0 100 100'}
                textP={'Прием платежей от ваших клиентов с помощью QR-кода СБП'}
                textH5={'QR СБП'} colorTextP={theme.colors.fontColorSecondary} heightDiv={isMobile ? '164px' : defaultHeight}
                />
                <CardForSixthPage background={'linear-gradient(72.48deg, #F0F2FF 0%, #FAFBFF 100%)'}
                iconId={'qrSber'} height={isMobile ? '80' :'100'} width={isMobile ? '80' :'100'} viewBox={'0 0 100 100'}
                textP={'Прием платежей от ваших клиентов с помощью QR-кода СберБанка'} heightDiv={isMobile ? '164px' : defaultHeight}
                textH5={'QR СБЕР'} colorTextP={theme.colors.fontColorSecondary}
                />
            </CardsListforSixthPage>
        </SixthPageStyled>
    );

};
const SixthPageStyled = styled.div `
    margin-top: 240px;
    @media (max-width: 426px) {
      margin-top: 120px;
      padding-left: 12px;
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
`;
