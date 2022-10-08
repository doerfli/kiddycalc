import { NumberElementType } from "../components/number/number_element";
import { getRandomIcon } from "../utils/icons";

export default interface ChallengeSpecification {
    number1: number;
    number2: number;
    result: number;
    icon: string;
    inputType1: NumberElementType;
    inputType2: NumberElementType;
    resultType1: NumberElementType;
    resultType2: NumberElementType;
    resultType3: NumberElementType;
}

const getRandomNumberElementType = (): NumberElementType => { 
    return Math.random() < 0.5 ? NumberElementType.ICONS : NumberElementType.NUMERIC;
}

export const newChallenge = (): ChallengeSpecification => {
    const n1 = Math.ceil(Math.random() * 5);
    const n2 = Math.ceil(Math.random() * 5);
    return {
        number1: n1,
        number2: n2,
        result: n1 + n2,
        icon: getRandomIcon(),
        inputType1: getRandomNumberElementType(),
        inputType2: getRandomNumberElementType(),
        resultType1: getRandomNumberElementType(),
        resultType2: getRandomNumberElementType(),
        resultType3: getRandomNumberElementType()
    };
}

