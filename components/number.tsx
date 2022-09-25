import React, { useState }  from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface NumberProps {
    number: number;
}; 

export default function Number(props: NumberProps) {
    const [ number, setNumber ] = useState(props.number);

    return (
        <div>
            {[...Array(number)].map((x, i) =>
                <FontAwesomeIcon key={i} icon='car' className="text-6xl" />
            )}
        </div>
    );

}
