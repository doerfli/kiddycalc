import React, { useState }  from "react";

import IconBlock from "./icon_block";

interface NumberProps {
    number: number;
}; 

export default function Number(props: NumberProps) {

    return (
        <IconBlock icon="car" number={props.number} colorClass="bg-blue-300" />
    );

}
