import React, { useState }  from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconBlockProps {
    icon: string;
    colorClass: string;
    number: number;
    class?: string;
    onClickHandler?: any;
    onClickValue?: any;
}; 

export default function IconBlock(props: IconBlockProps) {
    const [ icon ] = useState(props.icon as IconProp);
    const [ clicked, setClicked ] = useState(false);
    const [ correct, setCorrect ] = useState(false);

    let cls = "grid grid-cols-2 gap-4 p-4 rounded-lg ";

    if (props.class) {
        cls += props.class + " ";
    }

    if (clicked) {
        if (correct) {
            cls += "bg-green-300 ";
        } else {
            cls += "bg-red-300 ";
        }
    } else {
        cls += props.colorClass + " ";
    }

    const setCorrectResult = (correct: boolean) => {
        setClicked(true);
        setCorrect(correct);
    }

    return (
        <div className={cls} onClick={() => props.onClickHandler(props.onClickValue, setCorrectResult)}>
            {[...Array(props.number)].map((_, i) =>
                <FontAwesomeIcon key={i} icon={icon} className="text-6xl" />
            )}
        </div>
    );

}
