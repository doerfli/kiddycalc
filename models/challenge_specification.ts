import { NumberElementType } from "../components/number/number_element";
import { getRandomIcon } from "../utils/icons";

export enum Operation {
    ADDITION,
    SUBTRACTION
}

export default interface ChallengeSpecification {
    number1: number;
    number2: number;
    operation: Operation;
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

export const newChallengeAddition = (max: number, allowZero = false): ChallengeSpecification => {
    let n1;

    do {
        n1 = Math.floor(Math.random() * max);
    } while (n1 >= max || (! allowZero && n1 == 0));

    let n2;

    do {
        n2 = Math.floor(Math.random() * max);
    } while (n1 + n2 > max || (! allowZero && n2 == 0));

    return {
        number1: n1,
        number2: n2,
        operation: Operation.ADDITION,
        result: n1 + n2,
        icon: getRandomIcon(),
        inputType1: getRandomNumberElementType(),
        inputType2: getRandomNumberElementType(),
        resultType1: getRandomNumberElementType(),
        resultType2: getRandomNumberElementType(),
        resultType3: getRandomNumberElementType()
    };
}

export const newChallengeSubtraction = (max: number): ChallengeSpecification => {
    let n1;

    do {
        n1 = Math.floor(Math.random() * max);
    } while (n1 <= 2 || n1 > max); // allow 1 < n1 < max

    let n2;

    do {
        n2 = Math.floor(Math.random() * max);
    } while (n2 < 1 || n2 >= n1);

    return {
        number1: n1,
        number2: n2,
        operation: Operation.SUBTRACTION,
        result: n1 - n2,
        icon: getRandomIcon(),
        inputType1: getRandomNumberElementType(),
        inputType2: getRandomNumberElementType(),
        resultType1: getRandomNumberElementType(),
        resultType2: getRandomNumberElementType(),
        resultType3: getRandomNumberElementType()
    };
}

/* type 1 challenge has a sum of maximum 10 */
export const newChallengeType1 = (): ChallengeSpecification => {
    return newChallengeAddition(10);
}

/* type 2 challenge has a sum of maximum 15 */
export const newChallengeType2 = (): ChallengeSpecification => {
    const r = Math.random();
    if (r < 0.2) {
        return newChallengeSubtraction(10);
    } else {
        return newChallengeAddition(15);
    }
}

export const newChallengeType3 = (): ChallengeSpecification => {
    const r = Math.random();
    if (r < 0.4) {
        return newChallengeSubtraction(15);
    } else {
        return newChallengeAddition(20, true);
    }
}


export const newChallenge = (level: number): ChallengeSpecification => {
    switch (level) {
        case 1:
            return newChallengeType1();
        case 2:
            return newChallengeType2();
        case 3: 
            return newChallengeType3();
        default:
            return newChallengeType1();
    }
}
