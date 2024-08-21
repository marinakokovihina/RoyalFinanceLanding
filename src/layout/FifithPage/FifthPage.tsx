import React from 'react';
import styled from "styled-components";
import {SpanBlue} from "../../components/BlueSpan/BlueSpan";
import {ListOfCountry} from "../../components/ListOfCountry/ListOfCountry";
import {Icon} from "../../components/Icon/Icon";
import {CardForFifthPage} from "../../components/CardForFifthPage/CardForFifthPage";
import {SvgWrapperStyled} from "../../components/SvgWrapper/SvgWrapper";
import {useMediaQuery} from "react-responsive";
import MapOfWorld from  "../../assets/img/map.png"

export const FifthPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <FifthPageStyled>
            <SvgWrapperStyled display={isMobile ? 'none' : 'block'} top={'4161px'}>
                <Icon IconId={'circleForFifthPage'} height={'703'} width={'471'} viewBox={'0 0 471 703'}/>
            </SvgWrapperStyled>
            <StyledH5> Международные переводы <SpanBlue> по всей планете</SpanBlue> </StyledH5>
            <StyledH5Mob> Международные переводы <br/><SpanBlue> по всей планете</SpanBlue> </StyledH5Mob>
            <Container>
                <LeftColumn>
                    <ListOfCountry/>
                    <CardForFifthPage/>
                </LeftColumn>
                <RightColumn>

                    <Icon IconId={'mapOfWorld'} width={isMobile ? '351' : '746'} height={isMobile ? '242' :'516'} viewBox={'0 0 746 516'}/>
                </RightColumn>
            </Container>
        </FifthPageStyled>
    );
};
 const StyledH5 = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 80px;
  text-align: left;
  display: block;
  @media  (max-width: 426px) {
    font-size: 32px;
    line-height: 40px;
    max-width: 350px;
    text-align: left;
    display: none;

  }
  
`;
const StyledH5Mob = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 80px;
  text-align: left;
  display: none;

  @media  (max-width: 426px) {
    font-size: 32px;
    line-height: 40px;
    max-width: 350px;
    display: block;

    text-align: left;
  }
  
`;
const FifthPageStyled = styled.div `
margin-top: 240px;
  @media (max-width: 426px) {
    padding-left: 12px;
  }
`;
const Container = styled.div `
display: flex;
  position: relative;
  margin-top: 80px;
  gap: 24px;
  @media (max-width: 426px) {
    flex-direction: column-reverse;
    

  }
`;
const LeftColumn = styled.div `
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const RightColumn = styled.div `
  @media (max-width: 426px) {
margin-left: -15px;

  }
`;
