import React, { useState }  from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface NumberProps {
    number: number;
}; 

export default function Number(props: NumberProps) {
    const [ number, setNumber ] = useState(props.number);

    return (
        <div className="grid grid-cols-2 gap-4 p-4 bg-green-300 rounded-lg">
            {[...Array(number)].map((x, i) =>
                <FontAwesomeIcon key={i} icon='car' className="text-6xl" />
            )}
        </div>
    );

}
