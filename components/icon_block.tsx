import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconBlockProps {
    icon: string;
    colorClass: string;
    number: number;
    class?: string;
    onClickHandler?: any;
}

export default function IconBlock(props: IconBlockProps) {

    let cls = "icon_block ";

    if (props.class) {
        cls += props.class + " ";
    }

    cls += props.colorClass + " ";

    return (
        <div className={cls} onClick={props.onClickHandler}>
            {[...Array(props.number)].map((_, i) =>
                <FontAwesomeIcon key={i} icon={props.icon as IconProp} className="icon fa-fw" />
            )}
        </div>
    );

}
