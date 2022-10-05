import React  from "react";

import IconBlock from "./icon_block";
import NumberBlock from "./number_block";

export enum NumberElementType {
    ICONS,
    NUMERIC,
}

interface NumberElementProps {
    type?: NumberElementType;
    number: number;
    icon: string;
    colorClass: string;
    class?: string;
    onClickHandler?: any;
}

export default function NumberElement(props: NumberElementProps) {
    const type = props.type || NumberElementType.ICONS;

    switch (type) {
        case NumberElementType.ICONS:
            return (
                <IconBlock 
                    icon={props.icon} 
                    number={props.number} 
                    colorClass={props.colorClass} 
                    class={props.class} 
                    onClickHandler={props.onClickHandler} 
                    />
            );

        case NumberElementType.NUMERIC:
            return (
                <NumberBlock 
                    number={props.number} 
                    colorClass={props.colorClass} 
                    class={props.class} 
                    onClickHandler={props.onClickHandler} 
                    />
            );
        break;

        
        default:
            throw new Error("Unknown number type: " + type);
    }    

}
