import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FooterCard} from "../../components/FooterCard/FooterCard";
import {Button} from "../../components/Button/Button";
import {SvgWrapperStyled} from "../../components/SvgWrapper/SvgWrapper";
import {Icon} from "../../components/Icon/Icon";
import {useMediaQuery} from "react-responsive";
import ScrollAnimation from "react-animate-on-scroll";

export const Footer = () => {
    const isMobile = useMediaQuery({ maxWidth: 426 });
    const isTablet = useMediaQuery({ minWidth: 427, maxWidth: 1024 });

    return (
        <>
            <SvgWrapperStyled display={isMobile ? 'none' : isTablet ? 'none ' : 'block'} top = {'6630px'} left={'-7%'}>
                <Icon IconId={'iconsForFooter'} height={'538'} width={'785'} viewBox={'0 0 785 538'}/>
            </SvgWrapperStyled>
            <ScrollAnimation   animateIn="animate__fadeInUp"
                               animateOnce={true}
                               duration={1}
                               delay={300}
                               offset={10}  >
        <StyledFooter>
            <StyledH4>Присоединяйтесь к нам</StyledH4>
            <GroupFooterCard>
                <FooterCard idIcon={'number1White'} viewBox={'0 0 44 44'} width={'44'} height={'44'} textP={'Пообщаемся и поймем, как решить задачу с учетом ваших обстоятельств'} textH={'Обсудим'}/>
                <FooterCard idIcon={'number2White'} viewBox={'0 0 44 44'} width={'44'} height={'44'} textP={'Обсудим детали сотрудничества на выгодных для обоих сторон условиях'} textH={'Договоримся'}/>
                <FooterCard idIcon={'number3White'} viewBox={'0 0 44 44'} width={'44'} height={'44'} textP={'Быстро и без рисков решим вашу задачу'} textH={'Решим'}/>
            </GroupFooterCard>
            <Button onClick = {() => { window.open("https://t.me/Rockefeller_017", "_blank");    }}
                    width={isMobile ? '311px' : isTablet ? '311px' : '238px'} height = {isMobile ? '52px' : '48px'} text={'Связаться с нами'}
                     borderRadius={'12px'} iconId={'tgIconForWhiteButton'} background={theme.colors.fontColorWhite}
                     widthIcon={'24'} heightIcon={'24'} viewBoxIcon={'0 0 24 24'} color={`${theme.colors.fontPrimary}`}
                     gap={'12px'}
            />
        </StyledFooter>
            </ScrollAnimation>
        </>
    );
//     TODO добавить свгшки

};

const StyledFooter = styled.footer `
  width: 1296px;
  position: relative;
  margin-top: 240px;
  height: 502px;
  padding: 40px;
  background: ${theme.colors.colorForCardBlue};
  display: flex;
  border-radius: 40px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 120px;
  @media (max-width: 426px) {
    flex-direction: column;
    width: 351px;
    height: auto;
    margin-top: 120px;
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 50px;

  }
  @media (min-width: 427px) and (max-width: 1024px) {
    margin-top: 0;
    width: 696px;
    height: auto;

  }
`;
const GroupFooterCard = styled.div `
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-bottom: 62px;
  @media (max-width: 426px) {
    flex-direction: column;
    width: 311px;
  }
  @media (min-width: 427px) and (max-width: 1024px) {
    flex-direction: column;


  }
`;
const StyledH4 = styled.div `
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 60px;
  color: ${theme.colors.fontColorWhite};
  @media (max-width: 426px) {
    text-align: left;
    font-size: 32px;
    line-height: 40px;

  }
`
