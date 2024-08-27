import React from 'react';
import {theme} from "../../styles/Theme";
import {CardForMainProps, StyledCardForMain, StyledH4, StyledP} from "./CardUp";
import {IconCardFast} from "./Icons/IconCardFast";
import {useMediaQuery} from "react-responsive";
import 'animate.css/animate.min.css';

export const CardBottom = (props: CardForMainProps) => {
    const isDesktop = useMediaQuery({ minWidth: 1025 });
    return (

            <StyledCardForMain className= { isDesktop ? "animate__animated animate__fadeInUp animate animate__delay-05s" : ''}
                                height={props.height} width={props.width} background={props.background} border={props.border}
                               boxShadow={props.boxShadow} backdropFilter={props.backdropFilter} >
                <IconCardFast />
                <StyledH4 colorH4 = {theme.colors.fontColorWhite}>Автоматическая обработка платежей</StyledH4>
                <StyledP colorP = {theme.colors.fontColorWhite}>Сделка фиксируется в течение 3 минут с момента оплаты вашим клиентом</StyledP>
            </StyledCardForMain>
    );
};

