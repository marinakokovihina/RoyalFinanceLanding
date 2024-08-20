import React from 'react';
import {Card} from "./Card";
import {theme} from "../../styles/Theme";
import styled from "styled-components";
import {useMediaQuery} from "react-responsive";

export const GroupOfCardForPageForDifference = () => {
    const BackgroundViolet = 'linear-gradient(270deg, rgba(56, 70, 190, 0.75) 0%, #3846BE 100%)';
    const BackgroundLightViolet = 'linear-gradient(72.48deg, #CDD5FE 0%, #E7ECFD 70%)';
    const BackgroundGrey = 'linear-gradient(72.48deg, #F0F2FF 0%, #FAFBFF 100%)';
    const isMobile = useMediaQuery({ maxWidth: 400 });
    const defaultWidth = '404px'
    const defaultHeight = '227px'
    const mobileWidth = '351px'
    return (
        <StyledGroupOfCards>
            <Card   widthDiv={isMobile ? mobileWidth : defaultWidth} heightDiv={isMobile ? '146px' : defaultHeight}
                    textH5={'Надежный прием и вывод'} textP={'Все транзакции под защитой'} iconId={'safetyForCard'}
                    textColor={theme.colors.fontColorWhite} background={BackgroundViolet}
                    boxShadow={'inset 0px 0px 12px rgba(255, 255, 255, 0.08)' } backdropFilter={'blur(7.5px)'} viewBoxIcon={'0 0 100 100'}
                    widthIcon={isMobile ? '80' : '95'} heightIcon={isMobile ? '80' : '95'}
                    maxWidthP={isMobile ? '150px' : '100%'} maxWidthH={isMobile ? '150px' : '100%'}

            />
            <Card widthDiv={isMobile ? mobileWidth : defaultWidth} heightDiv={isMobile ? '112px' : defaultHeight}
                textH5={'Низкая стоимость '} textP={'Без потери качества'} iconId={'priceForCard'}
                  textColor={theme.colors.fontColorWhite} background={BackgroundViolet}
                  boxShadow={'inset 0px 0px 12px rgba(255, 255, 255, 0.08)' } backdropFilter={'blur(7.5px)'} viewBoxIcon={'0 0 100 100'}
                  widthIcon={isMobile ? '80' : '95'} heightIcon={isMobile ? '80' : '95'}
                  maxWidthP={isMobile ? '180px' : '100%'} maxWidthH={isMobile ? '180px' : '100%'}
            />
            <Card widthDiv={isMobile ? mobileWidth : defaultWidth} heightDiv={isMobile ? '118px' : defaultHeight}
                  textH5={'Быстрая интеграция'} textP={'Без задержек и лишних сложностей'} iconId={'puzzles'}
                  textColor={theme.colors.fontPrimary} background={BackgroundLightViolet}
                  boxShadow={'inset 0px 0px 12px rgba(255, 255, 255, 0.08)' } backdropFilter={'blur(7.5px)'} viewBoxIcon={'0 0 100 100'}
                  widthIcon={isMobile ? '80' : '95'} heightIcon={isMobile ? '80' : '95'}
                  maxWidthP={isMobile ? '190px' : '100%'}

            />
            <Card widthDiv={isMobile ? mobileWidth : defaultWidth} heightDiv={isMobile ? '118px' : defaultHeight}
                  textH5={'IT-поддержка 24/7'} textP={'Команда поддержки всегда на связи'} iconId={'shesteryonki'}
                  textColor={theme.colors.fontPrimary} background={BackgroundLightViolet}
                  boxShadow={'inset 0px 0px 12px rgba(255, 255, 255, 0.08)' } backdropFilter={'blur(7.5px)'} viewBoxIcon={'0 0 100 100'}
                  maxWidthP={isMobile ? '190px' : '100%'}
                  widthIcon={isMobile ? '80' : '95'} heightIcon={isMobile ? '80' : '95'}
            />
            <Card widthDiv={isMobile ? mobileWidth : defaultWidth} heightDiv={isMobile ? '146px' : defaultHeight}
                  textH5={'Агентские ставки аффилиатам'} textP={'Выгодные условия для партнеров'} iconId={'hands'}
                  textColor={theme.colors.fontPrimary} background={BackgroundGrey}
                  boxShadow={'inset 0px 0px 12px rgba(255, 255, 255, 0.08)' } backdropFilter={'blur(7.5px)'}
                  viewBoxIcon={'0 0 100 100'}
                  maxWidthP={isMobile ? '190px' : '100%'}
                  widthIcon={isMobile ? '80' : '95'} heightIcon={isMobile ? '80' : '95'}
                  textColorP={theme.colors.fontColorSecondary}
            />
            <Card widthDiv={isMobile ? mobileWidth : defaultWidth} heightDiv={isMobile ? '146px' : defaultHeight}
                 textH5={'Тестовое пространство'} textP={'Испытайте возможности платформы'} iconId={'test'}
                  textColor={theme.colors.fontPrimary} background={BackgroundGrey}
                  boxShadow={'inset 0px 0px 12px rgba(255, 255, 255, 0.08)' } backdropFilter={'blur(7.5px)'}
                  viewBoxIcon={'0 0 100 100'}
                  widthIcon={isMobile ? '80' : '95'} heightIcon={isMobile ? '80' : '95'}
                  textColorP={theme.colors.fontColorSecondary}
            />

        </StyledGroupOfCards>
    );
};

const StyledGroupOfCards = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 32px 36px;
  @media (max-width: 426px) {
    flex-direction: column;
    display: flex;
    margin-bottom: 120px;

  }
`


