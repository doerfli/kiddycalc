import React, { useState }  from "react";

import {
    faCar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface NumberProps {
    number: number;
}; 

export default function Number(props: NumberProps) {
    const [ number, setNumber ] = useState(props.number);

    let icons = [];
    for (let i = 0; i < number; i++) {
        icons.push(<FontAwesomeIcon icon={faCar} className="text-6xl" />);
    }

    return (
        <div>
            {[...Array(number)].map((x, i) =>
                <FontAwesomeIcon key={i} icon={faCar} className="text-6xl" />
            )}
        </div>
    );

}
