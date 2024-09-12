import React from 'react';
import {theme} from "../../styles/Theme";
import {CardForMainProps, StyledCardForMain, StyledH4, StyledP} from "./CardUp";
import {IconCardFast} from "./Icons/IconCardFast";
import {useMediaQuery} from "react-responsive";
import 'animate.css/animate.min.css';
import {animationMode} from "../../store/type";
import ScrollAnimation from "react-animate-on-scroll";

export const CardBottom = (props: CardForMainProps) => {
    const isDesktop = useMediaQuery({ minWidth: 1025 });
    const isMobile = useMediaQuery({ maxWidth: 1440 });

    return (
        <ScrollAnimation
            animateIn={isMobile ? "animate__fadeIn" : "animate__fadeInLeft"}
            animateOnce={animationMode}
            duration={3}
            delay={2}
            offset={10}
        >
            <StyledCardForMain className= { isMobile ? " " :  "animate__animated animate__fadeInLeft"}
                                height={props.height} width={props.width} background={props.background} border={props.border}
                               boxShadow={props.boxShadow} backdropFilter={props.backdropFilter} >
                <IconCardFast />
                <StyledH4 colorH4 = {theme.colors.fontColorWhite}>Быстрая обработка платежей</StyledH4>
                <StyledP colorP = {theme.colors.fontColorWhite}>Сделка фиксируется в течение 3 минут с момента оплаты вашим клиентом</StyledP>
            </StyledCardForMain>
        </ScrollAnimation>
    );
};

