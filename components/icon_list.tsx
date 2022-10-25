import React  from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconPrefix, IconProp } from "@fortawesome/fontawesome-svg-core";
import { allIcons } from "../utils/icons";


export default function IconList() {

    const icons = allIcons().map((icon, i) => (
        <FontAwesomeIcon key={i} icon={['fa-duotone' as IconPrefix, icon] as IconProp} className="fa-fw p-4 text-6xl" />
    ));

    return (
        <div>
            {icons}
        </div>
    );
}
