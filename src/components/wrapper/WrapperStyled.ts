import styled from "styled-components";

type StyledWrapperTypes = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
}
export const StyledWrapper = styled.div <StyledWrapperTypes>`
  display: flex;
  position: relative;
  z-index: 2;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "no wrap"};
  @media (min-width: 768px) and (max-width: 1024px) {
    width: max-content;
    max-width: 766px;
    overflow-x: hidden;
  }
  @media (max-width: 321px) {
  width: fit-content;
  }
    @media (min-width: 322px) and (max-width: 767px){
    width: auto;    
  }
`
