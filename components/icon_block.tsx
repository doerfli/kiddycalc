import React, { useState }  from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconBlockProps {
    icon: string;
    number: number;
    class?: string;
}; 

export default function IconBlock(props: IconBlockProps) {
    const [ icon ] = useState(props.icon as IconProp);

    let cls = "grid grid-cols-2 gap-4 p-4 rounded-lg ";

    if (props.class) {
        cls += props.class;
    }

    return (
        <div className={cls}>
            {[...Array(props.number)].map((_, i) =>
                <FontAwesomeIcon key={i} icon={icon} className="text-6xl" />
            )}
        </div>
    );

}
