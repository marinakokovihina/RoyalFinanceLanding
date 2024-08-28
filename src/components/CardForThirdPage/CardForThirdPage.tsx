import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Image} from "../Image/Image";
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
            {/*<SvgWrapperStyled top='-20%' left='20px'>*/}
            <Div>
                <Image src={props.iconId} height={props.height} width={props.width}/>

            </Div>  {/*<Icon IconId={`${props.iconId}`} width={props.width} height={props.height} viewBox={props.viewBox}/>*/}
            {/*</SvgWrapperStyled>*/}
            <StyledCardItemsThirdPageDiv>
                <CardForThirdPageH5Styled>{props.textH5}</CardForThirdPageH5Styled>
                <CardForThirdPagePStyled>{props.textP}</CardForThirdPagePStyled>
            </StyledCardItemsThirdPageDiv>
        </CardForThirdPageStyledDiv>
    );
};
const Div = styled.div `
  width: 100%;
  display: flex;
  align-items: flex-start;
`
const CardForThirdPageStyledDiv = styled.div <CardForThirdPageProps>`
    display: flex;
     flex-direction: column;
     align-items: flex-start;
     gap: 10px;
     width: 404px;
     height: ${props => props.heightDiv};
     background: linear-gradient(72.48deg, #F0F2FF 0%, #FAFBFF 100%);
     border: 1px solid rgba(65, 104, 241, 0.08);
     backdrop-filter: blur(40px);
     border-radius: 20px;
      @media (max-width: 426px) {
        flex-direction: column;
        gap: 8px;
        width: 351px;
       
      }
  img{
    margin-top: -10%;
    margin-left: 20px;
  }
  @media (min-width: 427px) and (max-width: 1024px) {
    width: 336px;
    gap: 8px;
  }
`;

const StyledCardItemsThirdPageDiv = styled.div `
    display: flex;
  margin-top: 0;
  max-width: 85%;
  padding-left: 20px;
  justify-content: left;
  text-align: left;
    flex-direction: column;
  @media (max-width: 426px) {
    flex-direction: column;
    gap: 12px;
    max-width: 95%;
    margin-top: 0;

  }
  @media (min-width: 427px) and (max-width: 1024px) {
    width: 336px;
    max-width: 95%;
    margin-top: 0;

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
    margin-bottom: 0;

  }
  @media (min-width: 427px) and (max-width: 1024px) {
    font-size: 20px;
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
  @media (min-width: 427px) and (max-width: 1024px) {
    font-size: 18px;

  }
`;

