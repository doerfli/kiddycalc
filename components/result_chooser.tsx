import React, { useState }  from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ResultChooserProps {
    result: number;
}; 

export default function ResultChooser(props: ResultChooserProps) {
    const [ result, setResult ] = useState(props.result);
    const [ choice1, setChoice1 ] = useState(props.result);
    const [ choice2, setChoice2 ] = useState(props.result + 1);
    const [ choice3, setChoice3 ] = useState(props.result - 1);

    return (
        <div className="flex flex-cols-3 gap-4 items-center">
            <div>
                <div className="grid grid-cols-2 gap-4 p-4 mr-10 bg-red-300 rounded-lg">
                    {[...Array(choice1)].map((x, i) =>
                        <FontAwesomeIcon key={i} icon='car' className="text-6xl" />
                    )}
                </div>
            </div>
            <div>
                <div className="grid grid-cols-2 gap-4 p-4 mr-10 bg-yellow-300 rounded-lg">
                    {[...Array(choice2)].map((x, i) =>
                        <FontAwesomeIcon key={i} icon='car' className="text-6xl" />
                    )}
                </div>
            </div>
            <div>
                <div className="grid grid-cols-2 gap-4 p-4 mr-10 bg-blue-300 rounded-lg">
                    {[...Array(choice3)].map((x, i) =>
                        <FontAwesomeIcon key={i} icon='car' className="text-6xl" />
                    )}
                </div>
            </div>
        </div>
    );

}
