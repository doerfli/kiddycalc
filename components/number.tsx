import React, { useState }  from "react";

import IconBlock from "./icon_block";

interface NumberProps {
    number: number;
}; 

export default function Number(props: NumberProps) {
    const [ number, setNumber ] = useState(props.number);

    return (
        <IconBlock icon="car" number={number} class="option" />
    );

}
