import React from 'react';
import styled from "styled-components";
import {CardForFourthPage} from "../../components/CardForFourthPage/CardForFourthPage";
import {SpanGreen} from "../../components/GreenSpan/GreenSpan";
import {theme} from "../../styles/Theme";
import {Icon} from "../../components/Icon/Icon";
import {useMediaQuery} from "react-responsive";



export const FourthPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <FourthPageStyled>
            <StyledH5><SpanGreen> Безопасность </SpanGreen>хранения и переводов</StyledH5>
        <Container>
            <LeftColumn>
                <CardForFourthPage iconId={'lock'} width={isMobile ? '80' : '100'} height={isMobile ? '80' : '100'} viewBox={'0 0 100 100'}
                    colorTextH5 = {theme.colors.fontColorWhite} colorTextP={theme.colors.fontColorWhite} textH5={'Надежный прием фиатных средств'}
                                   background={theme.colors.colorForCardGreen} textP={'Безопасные транзакции для вашего бизнеса с поддержкой множества валют '}/>
                <CardForFourthPage iconId = {'wallet'} width={isMobile ? '80' : '100'} height={isMobile ? '80' : '100'} viewBox={'0 0 100 100'}
                                   colorTextH5 = {theme.colors.fontPrimary} colorTextP={theme.colors.fontColorSecondary}
                                   textH5={'Холодные кошельки'} background={theme.colors.colorForCardGreyGreen} textP={'Обеспечивают максимальную безопасность для хранения ваших криптовалютных активов'}/>
                <CardForFourthPage iconId = {'handsWithTether'} width={isMobile ? '80' : '100'} height={isMobile ? '80' : '100'} viewBox={'0 0 100 100'}
                    colorTextH5 = {theme.colors.fontPrimary} colorTextP={theme.colors.fontColorSecondary} textH5={'Безопасные выводы для всех клиентов'}
                                   background={theme.colors.colorForCardGreyGreen} textP={'Каждый запрос обрабатывается индивидуально, что позволяет обеспечить максимальную защиту ваших средств.'}/>
                <CardForFourthPage iconId={'TPlusZero'} width={isMobile ? '80' : '100'} height={isMobile ? '80' : '100'} viewBox={'0 0 100 100'}
                    colorTextH5 = {theme.colors.fontColorWhite} colorTextP={theme.colors.fontColorWhite} textP={'Быстрый вывод день в день без блокировок и удержания средств на вашем счете '}
                                   textH5={'Отсутствие роллинга и холдинга средств'} background={theme.colors.colorForCardGreen}/>
            </LeftColumn>
            <RightColumn>
                <Icon IconId={'spider'} viewBox={'0 0 601 601'} height={isMobile ? '240' : '601'} width={isMobile ? '240' :'601'}/>
                <StyledH5Mob><SpanGreen> Безопасность </SpanGreen>хранения и переводов</StyledH5Mob>

            </RightColumn>
        </Container>
        </FourthPageStyled>
    );
};
const FourthPageStyled = styled.div `
  margin-top: 240px;
  text-align: left;
  @media (max-width: 426px) {
    margin-top: 120px;
    padding-left: 12px;
  }

`
const Container = styled.div `
padding: 0;
  display: flex;
  gap: 96px;
  @media (max-width: 426px) {
    flex-direction: column-reverse;
    gap: 0;
  }

`;
const LeftColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  @media (max-width: 426px) {
    display: flex;
    gap: 24px;

    flex-direction: column;
  }
`;
const RightColumn = styled.div`
  @media (max-width: 426px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;
const StyledH5 = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 60px;
  @media (max-width: 426px) {
   display: none; 
      

  }
`;
const StyledH5Mob = styled.h5`
  
  display: none;

  @media (max-width: 426px) {
    display: block;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    max-width: 90%;
    margin-bottom: 40px;

  }
`;
