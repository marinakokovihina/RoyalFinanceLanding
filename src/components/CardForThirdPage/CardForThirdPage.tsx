import React from 'react';
import {Icon} from "../Icon/Icon";
import styled from "styled-components";
import {SvgWrapperStyled} from "../SvgWrapper/SvgWrapper";
import {theme} from "../../styles/Theme";
type CardForThirdPageProps = {
    iconId?: string,
    height?: string,
    width?: string,
    heightDiv?: string,
    viewBox?: string,
    textH5?: string,
    textP?: string,

}
export const CardForThirdPage = (props: CardForThirdPageProps) => {
    return (
        <CardForThirdPageStyledDiv heightDiv={props.heightDiv}>
            <SvgWrapperStyled top='-20%' left='20px'>
                <Icon IconId={`${props.iconId}`} width={props.width} height={props.height} viewBox={props.viewBox}/>
            </SvgWrapperStyled>
            <StyledCardItemsThirdPageDiv>
                <CardForThirdPageH5Styled>{props.textH5}</CardForThirdPageH5Styled>
                <CardForThirdPagePStyled>{props.textP}</CardForThirdPagePStyled>
            </StyledCardItemsThirdPageDiv>
        </CardForThirdPageStyledDiv>
    );
};
const CardForThirdPageStyledDiv = styled.div <CardForThirdPageProps>`
    display: flex;
     flex-direction: column;
     align-items: flex-start;
     gap: 24px;
     width: 404px;
     height: ${props => props.heightDiv};
     background: linear-gradient(72.48deg, #F0F2FF 0%, #FAFBFF 100%);
     border: 1px solid rgba(65, 104, 241, 0.08);
     backdrop-filter: blur(40px);
     border-radius: 20px;
  @media (max-width: 426px) {
    flex-direction: column;
    gap: 40px;
    width: 351px;
   

  }
`;

const StyledCardItemsThirdPageDiv = styled.div `
    display: flex;
  margin-top: 60px;
  max-width: 85%;
  padding-left: 20px;
  justify-content: left;
  text-align: left;
    flex-direction: column;
  @media (max-width: 426px) {
    flex-direction: column;
    gap: 12px;

    max-width: 95%;

    
  
  }
`;
const CardForThirdPageH5Styled = styled.h5 `
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 15px;
  @media (max-width: 426px) {
    font-size: 20px;
    margin-bottom: 0px;

  }
`;
const CardForThirdPagePStyled = styled.p `
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${theme.colors.fontColorSecondary};
  @media (max-width: 426px) {
    font-size: 18px;

  }
`;

