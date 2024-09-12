import React from 'react';
import styled from "styled-components";
import {SpanBlue} from "../../components/BlueSpan/BlueSpan";
import {ListOfCountry} from "../../components/ListOfCountry/ListOfCountry";
import {Icon} from "../../components/Icon/Icon";
import {CardForFifthPage} from "../../components/CardForFifthPage/CardForFifthPage";
import {SvgWrapperStyled} from "../../components/SvgWrapper/SvgWrapper";
import {useMediaQuery} from "react-responsive";
import ScrollAnimation from "react-animate-on-scroll";
import {Image} from "../../components/Image/Image";
import Map from "../../assets/img/Map.png"
import {animationMode} from "../../store/type";
export const FifthPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    // const isTablet = useMediaQuery({ minWidth: 427, maxWidth: 1024 });

    return (
        <FifthPageStyled id = "regions">
            <SvgWrapperStyled display={isMobile ? 'none' : 'block'} top={'4161px'} left={'-10%'}>
                <Icon IconId={'circleForFifthPage'} height={'703'} width={'471'} viewBox={'0 0 471 703'}/>
            </SvgWrapperStyled>
            <ScrollAnimation   animateIn="animate__fadeIn"
                               animateOnce={animationMode}
                               duration={1}
                               delay={20}
                               offset={10}>
                     <StyledH5>Международные переводы <SpanBlue> по всей планете</SpanBlue></StyledH5>
            </ScrollAnimation>
            <StyledH5Mob> Международные переводы <br/><SpanBlue> по всей планете</SpanBlue> </StyledH5Mob>
            <Container>
                <LeftColumn>
                    <ScrollAnimation   animateIn="animate__fadeInTopLeft"
                                       animateOnce={animationMode}
                                       duration={1}
                                       delay={20}
                                       offset={100}>
                    <ListOfCountry/>
                    </ScrollAnimation>
                    <ScrollAnimation   animateIn="animate__fadeInBottomLeft"
                                       animateOnce={animationMode}
                                       duration={1}
                                       delay={20}
                                       offset={100}>
                        <CardForFifthPage/>

                    </ScrollAnimation>
                </LeftColumn>
                <RightColumn>
                    <ScrollAnimation   animateIn="animate__fadeIn"
                                       animateOnce={animationMode}
                                       duration={1}
                                       delay={20}
                                       offset={100}>
                        <Image src={Map} height={isMobile ? '242px' : '516px'} width={isMobile ? '351px' : '746px'}/>
                    </ScrollAnimation>
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
  @media  (max-width: 767px) {
    font-size: 32px;
    line-height: 40px;
    max-width: 350px;
    text-align: left;
    display: none;

  }
   @media (min-width: 768px) and (max-width: 1024px) {
     font-size: 40px;
      width: 90%;
     margin-bottom: 60px;

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

  @media  (max-width: 767px) {
    font-size: 32px;
    line-height: 40px;
    max-width: 350px;
    display: block;
    text-align: left;
  }
  
`;
const FifthPageStyled = styled.div `
  padding-top: 120px;
  margin-top: 120px;
  @media (max-width: 430px) {
    padding-left: 0;
  }
  @media (min-width: 431px) and (max-width: 1024px) {
    margin-top: 160px;
    padding-left: 0;
  }
`;
const Container = styled.div `
display: flex;
  position: relative;
  margin-top: 80px;
  gap: 24px;
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    

  }
  @media (min-width: 431px) and (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
    width: 90%;
  }
`;
const LeftColumn = styled.div `
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 430px) and (max-width: 1024px) {
    align-items: center;
    width: 100%;
  }
  

`;
const RightColumn = styled.div `
  @media (max-width: 430px) {
    //margin-left: -15px; 
    width: 100%;
  }
`;
