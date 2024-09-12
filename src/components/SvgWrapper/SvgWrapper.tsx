import styled from "styled-components";

type SvgWrapperProps = {
    top?: string,
    left?: string,
    fill?: string,
    display?: string,
}


export const SvgWrapperStyled = styled.div<SvgWrapperProps> `
    position: absolute;
  
    display:${props => props.display || 'block'};
    left: ${props => props.left || '0'};
    top: ${props => props.top || '0'};
    fill: ${props=>props.fill || 'none'};
`
