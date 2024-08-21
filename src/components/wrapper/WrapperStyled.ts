import styled from "styled-components";

type StyledWrapperTypes = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
}
export const StyledWrapper = styled.div <StyledWrapperTypes>`
  display: flex;
  font-family: 'IBM Plex Sans';
  position: relative;
  //overflow-x: hidden;
  z-index: 2;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  wrap: ${props => props.wrap || "no wrap"}
`
