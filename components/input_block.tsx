import React from "react";
import NumberElement, { NumberElementType } from "./number/number_element";

interface NumberBlockProps {
    type?: NumberElementType;
    number: number;
    icon: string;
    class?: string;
    onClickHandler?: () => React.MouseEventHandler<HTMLDivElement>;
}

export default function InputBlock(props: NumberBlockProps) {
    return (
        <NumberElement number={props.number} icon={props.icon} colorClass="input_block" type={props.type} />    
    );

}



