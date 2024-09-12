import React from 'react';
import {StyledH5} from "../../components/StyledH5/StyledH5";
import {SpanBlue} from "../../components/BlueSpan/BlueSpan";
import styled from "styled-components";
import {CardForSeventhPage} from "../../components/CardForSeventhPage";
import {theme} from "../../styles/Theme";
import {CustomDivForSeventhPage} from "../../components/CustomDivForSeventhPage/CustomDivForSeventhPage";
import {SvgWrapperStyled} from "../../components/SvgWrapper/SvgWrapper";
import {Icon} from "../../components/Icon/Icon";
import {useMediaQuery} from "react-responsive";
import ScrollAnimation from "react-animate-on-scroll";
import FirstImg from "../../assets/img/Perevod3.png"
import SecondImg from "../../assets/img/Perevod2.png"
import ThirdImg from "../../assets/img/Perevod1.png"
import {animationMode} from "../../store/type";

export const SeventhPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isMobilePlus = useMediaQuery({ maxWidth: 1023 });


    const def = '311px';
    const def2 = '388px'
    const isDesktop = useMediaQuery({ minWidth: 1023 });
    const m =  useMediaQuery({ maxWidth: 1439 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

    //                                         {/*TODO по-нормальному тут сделать с свгшками*/}
    return (
        <SeventhPageStyled>
            <SvgWrapperStyled display={m ? "none" : 'block'} top={'5800px'} left={'84%'} >
                <Icon IconId={'circleForSeventhPage'} viewBox={'0 0 302 474'} width={'302'} height={'474'}/>
            </SvgWrapperStyled>
            <ScrollAnimation   animateIn="animate__fadeInLeft"
                               animateOnce={animationMode}
                               duration={1}
                               delay={300}
                               offset={10}  >
                <StyledH5 ><SpanBlue>Настраиваемая форма</SpanBlue>  оплаты</StyledH5>
            </ScrollAnimation>

            <Wrapper>
                <ScrollAnimation   animateIn="animate__fadeInLeft"
                                   animateOnce={animationMode}
                                   duration={1}
                                   delay={300}
                                   offset={10}  >
                <StyledWrapper>
                <TextWrapper>
                    <StyledH6>Процесс оплаты для P2P переводов</StyledH6>
                    <StyledP>Мы предлагаем собственную форму оплаты для переводов между физ. лицами, которая позволяет быстро и удобно переводить средства</StyledP>
                </TextWrapper>


                <CardWrapper>
                    <CardForSeventhPage iconId1={'number1'} textForTopCard={'Ввод номера карты, суммы платежа и банка получателя'}
                                        height1={'36'} width1={'36'} viewBox1={'0 0 36 36'} src={FirstImg}
                                        viewBox2={'0 0 276 349'} width2={isMobile ? def :'276px'} height2={isMobile ? def2 :'349px'}
                    />
                    <CardForSeventhPage iconId1={'number2'} textForTopCard={'Перевод средств на счет получателя'}
                                        height1={'36'} width1={'36'} viewBox1={'0 0 36 36'} src={SecondImg}
                                        viewBox2={'0 0 276 349'} width2={isMobile ? def  :'276px'} height2={isMobile ? def2  :'349px'}
                    />
                    <CardForSeventhPage iconId1={'number3'} textForTopCard={'Апелляции'}
                                        height1={'36'} width1={'36'} viewBox1={'0 0 36 36'} src={ThirdImg}
                                         viewBox2={'0 0 276 349'} width2={isMobile ? def : '276px'} height2={isMobile ? def2 :'349px'}
                    />
                    <CustomDivForSeventhPage display={ !isDesktop ? 'flex' : 'none'} />
                </CardWrapper>
            </StyledWrapper>
                </ScrollAnimation>
                <ScrollAnimation   animateIn="animate__fadeInRight"
                                   animateOnce={animationMode}
                                   duration={1}
                                   delay={300}
                                   offset={10}  >
                <StyledDivForBeidge>
                    <CustomDivForSeventhPage display={isDesktop ? 'flex' : 'none'} />

                </StyledDivForBeidge>
                </ScrollAnimation>
            </Wrapper>
        </SeventhPageStyled>
    );
};
// TODO добавить свгшки

const SeventhPageStyled = styled.div `
    margin-top: 240px;
    //margin-left: -20%;
  @media (max-width: 767px) {
    margin-top: 120px;
    padding-left: 0px;
    margin-left: 0;

  
  }
  @media (max-width: 321px) {
    max-width: 310px;


  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 160px;
    width: 90%;
    margin-left: 0;
    margin-bottom: 160px;
  }
 
  
`;const Wrapper = styled.div `
  display: flex;
  flex-direction: row;
  gap: 40px;
  @media (max-width: 1439px) {
    display: flex;
    flex-direction: column;
  }
  
  

`;const StyledDivForBeidge = styled.div `
  @media (min-width: 1024px) and (max-width: 1439px) {
   display: flex;
  }
`;
const CardWrapper = styled.div `
  display: flex;
  flex-direction: row;
  gap: 40px;
    
 
  @media (max-width: 767px) {
    max-width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 30px;}
  
  //@media (min-width: 768px)  {
  //  flex-direction: row;
  //  gap: 25px;
  //}
  @media (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

  }
  

`
const TextWrapper = styled.div `
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 427px) and (max-width: 1439px) {
    gap: 24px;

  }
  @media (max-width: 321px) {
    max-width: 310px;


  }
`;

const StyledH6 = styled.h6`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  @media (max-width: 321px) {
    max-width: 310px;


  }
  @media (min-width: 427px) and (max-width: 1439px) {
    font-size: 20px;

  }
`;

const StyledP = styled.p `
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${theme.colors.fontColorSecondary};
  @media (max-width: 321px) {
    max-width: 310px;


  }
  @media (min-width: 427px) and (max-width: 1439px) {
    font-size: 18px;

  }
`;
const StyledWrapper = styled.div `
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 40px;
  width: 100%;
  max-width: 950px;
  height: auto;
  background: ${theme.colors.fontColorWhite};
  border: 1px solid #F1F1F4;
  border-radius: 20px;
  @media (max-width: 767px) {
    width: 100%;
    align-items: center;
    height: auto;
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    height: auto;
  }
`;
