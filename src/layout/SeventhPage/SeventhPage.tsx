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

export const SeventhPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const def = '311px';
    const def2 = '388px'
    const isTablet = useMediaQuery({ minWidth: 427, maxWidth: 1024 });

    //                                         {/*TODO по-нормальному тут сделать с свгшками*/}
    return (
        <SeventhPageStyled>
            <SvgWrapperStyled display={isMobile ? "none" : 'block'} top={'5800px'} left={'80%'} >
                <Icon IconId={'circleForSeventhPage'} viewBox={'0 0 302 474'} width={'302'} height={'474'}/>
            </SvgWrapperStyled>
                <StyledH5><SpanBlue>Настраиваемая форма</SpanBlue>  оплаты</StyledH5>
            <Wrapper>
                <StyledWrapper>
                <TextWrapper>
                    <StyledH6>Процесс оплаты для P2P переводов</StyledH6>
                    <StyledP>Мы предлагаем собственную форму оплаты для переводов между физ. лицами, которая позволяет быстро и удобно переводить средства</StyledP>
                </TextWrapper>


                <CardWrapper>
                    <CardForSeventhPage iconId1={'number1'} textForTopCard={'Ввод номера карты, суммы платежа и банка получателя'}
                                        height1={'36'} width1={'36'} viewBox1={'0 0 36 36'}
                                        iconId2={'firstImageForSeventhPage'} viewBox2={'0 0 276 349'} width2={isMobile ? def :'276'} height2={isMobile ? def2 :'349'}
                    />
                    <CardForSeventhPage iconId1={'number2'} textForTopCard={'Перевод средств на счет получателя'}
                                        height1={'36'} width1={'36'} viewBox1={'0 0 36 36'}
                                        iconId2={'thirdImg'} viewBox2={'0 0 276 349'} width2={isMobile ? def : '276'} height2={isMobile ? def2 :'349'}
                    />
                    <CardForSeventhPage iconId1={'number3'} textForTopCard={'Апелляции'}
                                        height1={'36'} width1={'36'} viewBox1={'0 0 36 36'}
                                        iconId2={'thirdImg'} viewBox2={'0 0 276 349'} width2={isMobile ? def : '276'} height2={isMobile ? def2 :'349'}
                    />
                    <CustomDivForSeventhPage display={isTablet ? 'flex' : 'none'}/>
                </CardWrapper>

            </StyledWrapper>
                <StyledDivForBeidge>
                    <CustomDivForSeventhPage display={isTablet ? 'none' : 'flex'}/>

                </StyledDivForBeidge>
            </Wrapper>
        </SeventhPageStyled>
    );
};
// TODO добавить свгшки

const SeventhPageStyled = styled.div `
    margin-top: 240px;
  @media (max-width: 426px) {
    margin-top: 120px;
    padding-left: 12px;
    
  }
  @media (min-width: 427px) and (max-width: 1024px) {
  margin-top: 160px;
    width: 90%;
    margin-bottom: 160px;
  }
 
  
`;const Wrapper = styled.div `
  display: flex;
  flex-direction: row;
  gap: 40px;
  @media (max-width: 426px) {
    display: flex;
    flex-direction: column;
  }
  
`;const StyledDivForBeidge = styled.div `
`;
const CardWrapper = styled.div `
  display: flex;
  flex-direction: row;
  gap: 40px;
  @media (max-width: 426px) {
    flex-direction: column;
}
  @media (min-width: 427px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

  }

`
const TextWrapper = styled.div `
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 427px) and (max-width: 1024px) {
    gap: 24px;

  }
`;

const StyledH6 = styled.h6`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  @media (min-width: 427px) and (max-width: 1024px) {
    font-size: 20px;

  }
`;

const StyledP = styled.p `
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${theme.colors.fontColorSecondary};
  @media (min-width: 427px) and (max-width: 1024px) {
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
  width: 950px;
  height: 667.17px;
  background: ${theme.colors.fontColorWhite};
  border: 1px solid #F1F1F4;
  border-radius: 20px;
  @media (max-width: 426px) {
    width: 351px;
    height: auto;
  }
  @media (min-width: 427px) and (max-width: 1024px) {
    height: auto;

  }
`;
