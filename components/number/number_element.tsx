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
    let type = props.type || NumberElementType.ICONS;

    if (props.number == 0 || props.number > 9) {
        type = NumberElementType.NUMERIC;
    }

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
