import React from 'react';
import styled from "styled-components";
type ImageProps = {
    src?: string,
    width?: string,
    radius?: string,
    height?: string,
}
export const Image = (props: ImageProps) => {
    return (
       < StyledImg src = {props.src} radius={props.radius} width={props.width} height={props.height}/>
    );
};

const StyledImg = styled.img <ImageProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.radius} ;
`
