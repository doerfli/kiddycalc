import React  from "react";

import IconBlock from "./icon_block";

interface NumberProps {
    number: number;
    icon: string;
    colorClass: string;
}

export default function Number(props: NumberProps) {

    return (
        <IconBlock icon={props.icon} number={props.number} colorClass={props.colorClass} />
    );

}
