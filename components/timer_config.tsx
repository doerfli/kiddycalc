
import React  from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface TimeoutConfigProps {
    show: boolean;
    engageTimer: (seconds: number) => void;
}

export default function TimerConfig(props: TimeoutConfigProps) {

    const [ timeout, setTimeout ] = React.useState(0);

    const launch = () => {
        console.log("start timer");
        props.engageTimer(timeout);
    }

    let cls = "fixed z-10";

    if (! props.show) {
        cls += " hidden";
    }

    return (
        <div>
            <div className={cls}>
                <div className="fixed inset-0 bg-gray-500 bg-opacity-80 flex">
                    <div className="w-96 h-60 m-auto align-middle rounded-xl">
                        <div className="h-full w-full flex bg-pastel-grey rounded-xl">
                            <div className="m-auto align-middle grid grid-cols-3 text-4xl gap-4 ">
                                <div className="py-2 col-span-3 justify-self-center border-0 border-solid text-slate-900">
                                    <FontAwesomeIcon icon="hourglass-start"/>&nbsp;
                                    {timeout}m
                                </div>
                                <div 
                                    className="p-4 border-solid text-pastel-cream bg-slate-500 rounded-xl shadow-md shadow-slate-700 grid place-items-center"
                                    onClick={() => setTimeout(0)}
                                    >
                                    <FontAwesomeIcon icon="0"/>
                                </div>
                                <div 
                                    className="p-4 border-solid text-pastel-cream bg-pastel-blue rounded-xl shadow-md shadow-slate-700 grid grid-cols-2 place-items-center"
                                    onClick={() => setTimeout(timeout + 1)}
                                    >
                                    <FontAwesomeIcon icon="plus" />
                                    <FontAwesomeIcon icon="1" />
                                </div>
                                <div 
                                    className="p-4 border-solid text-pastel-cream bg-pastel-green rounded-xl shadow-md shadow-slate-700 grid place-items-center"
                                    onClick={() => launch()}
                                    >
                                    <FontAwesomeIcon icon="play" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
