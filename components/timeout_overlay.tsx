
import React  from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface TimeoutOverlayProps {
    show: boolean;
}

export default function TimeoutOverlay(props: TimeoutOverlayProps) {

    let cls = "fixed z-10";

    if (! props.show) {
        cls += " hidden";
    }

    return (
        <div>
            <div className={cls}>
                <div className="fixed inset-0 bg-gray-500 bg-opacity-80 flex">
                    <div className="w-60 h-60 m-auto align-middle">
                        <div className="h-full w-full flex bg-red-100 rounded-xl">
                            <span className="m-auto align-middle">
                                <FontAwesomeIcon icon="hand" className="fa-fw p-4 text-9xl text-red-600" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
