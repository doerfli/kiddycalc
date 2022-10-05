import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React  from "react";

interface NumberBlockProps {
    colorClass: string;
    number: number;
    class?: string;
    onClickHandler?: any;
}

export default function NumberBlock(props: NumberBlockProps) {

    let cls = "number_block ";

    if (props.class) {
        cls += props.class + " ";
    }

    cls += props.colorClass + " ";

    const numberChars = props.number?.toString() || "0";

    return (
        <div className={cls} onClick={props.onClickHandler}>
            {/* {props.number} */}
            {[...Array(numberChars.length)].map((_, i) => {
                const char = numberChars.charAt(i);
                return (<FontAwesomeIcon icon={char as IconProp} key={i} className="number_icon" />);
            })}
        </div>
    );

}
