import React from 'react';
import {theme} from "../../styles/Theme";
import {CardForMainProps, StyledCardForMain, StyledH4, StyledP} from "./CardUp";
import {IconCardFast} from "./Icons/IconCardFast";
import {useMediaQuery} from "react-responsive";

export const CardBottom = (props: CardForMainProps) => {

    return (

            <StyledCardForMain height={props.height} width={props.width} background={props.background} border={props.border}
                               boxShadow={props.boxShadow} backdropFilter={props.backdropFilter} >
                <IconCardFast />
                <StyledH4 colorH4 = {theme.colors.fontColorWhite}>Быстрая обработка платежей</StyledH4>
                <StyledP colorP = {theme.colors.fontColorWhite}>Зачисляем баланс по каждой сделке, конвертируем заявки по текущему курсу, либо ведем расчет в фиате</StyledP>
            </StyledCardForMain>
    );
};

