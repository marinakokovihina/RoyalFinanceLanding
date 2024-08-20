import React from 'react';
import icons from "../../assets/img/IconsSprite.svg";


export type SvgIcon = {
    IconId?: string;
    width?: string;
    height?: string;
    viewBox?: string;
}
export const Icon = (props: SvgIcon) => {
    return (

            <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${icons}#${props.IconId}`}/>
            </svg>

    );
};

