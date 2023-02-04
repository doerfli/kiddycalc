import { NumberElementType } from "../components/number/number_element";
import { getRandomIcon } from "../utils/icons";

export enum Operation {
    ADDITION,
    SUBTRACTION
}

export enum ResultSelectorType {
    ICONS,
    NUMBER_ENTRY
}
export default interface ChallengeSpecification {
    number1: number;
    number2: number;
    operation: Operation;
    result: number;
    icon: string;
    inputType1: NumberElementType;
    inputType2: NumberElementType;
    resultSelector: ResultSelectorType;
    resultType1: NumberElementType;
    resultType2: NumberElementType;
    resultType3: NumberElementType;
}

const getRandomNumberElementType = (): NumberElementType => { 
    return Math.random() < 0.5 ? NumberElementType.ICONS : NumberElementType.NUMERIC;
}

export const newChallengeAddition = (max: number, resultSelectorType: ResultSelectorType, allowZero: boolean, iconsOnly: boolean): ChallengeSpecification => {
    let r = 0;

    do {
        r = Math.round(Math.random() * max);
    } while (! isValidResult(r, allowZero));


    let n1;

    do {
        n1 = Math.round(Math.random() * r);
    } while (! isValidN1(n1, r, allowZero));

    const n2 = r - n1;

    return {
        number1: n1,
        number2: n2,
        operation: Operation.ADDITION,
        result: n1 + n2,
        icon: getRandomIcon(),
        resultSelector: resultSelectorType,
        inputType1: iconsOnly ? NumberElementType.ICONS : getRandomNumberElementType(),
        inputType2: iconsOnly ? NumberElementType.ICONS : getRandomNumberElementType(),
        resultType1: iconsOnly ? NumberElementType.ICONS : getRandomNumberElementType(),
        resultType2: iconsOnly ? NumberElementType.ICONS : getRandomNumberElementType(),
        resultType3: iconsOnly ? NumberElementType.ICONS : getRandomNumberElementType()
    };
}

function isValidResult(r: number, allowZero: boolean): boolean {
    if (allowZero) {
        return true;
    }

    return r >= 2;
}

function isValidN1(n1: number, r: number, allowZero: boolean): boolean {
    if (allowZero) {
        return true;
    }

    return n1 > 0 && n1 < r;
}

export const newChallengeSubtraction = (max: number, resultSelectorType: ResultSelectorType, allowZero: boolean, iconsOnly: boolean): ChallengeSpecification => {
    let r = 0;

    do {
        r = Math.round(Math.random() * max);
    } while (! isValidResult(r, allowZero));


    let n1;

    do {
        n1 = Math.round(Math.random() * r);
    } while (! isValidN1(n1, r, allowZero));

    const n2 = r - n1;


    return {
        number1: r,
        number2: n1,
        operation: Operation.SUBTRACTION,
        result: n2,
        icon: getRandomIcon(),
        resultSelector: resultSelectorType,
        inputType1: iconsOnly ? NumberElementType.ICONS : getRandomNumberElementType(),
        inputType2: iconsOnly ? NumberElementType.ICONS : getRandomNumberElementType(),
        resultType1: iconsOnly ? NumberElementType.ICONS : getRandomNumberElementType(),
        resultType2: iconsOnly ? NumberElementType.ICONS : getRandomNumberElementType(),
        resultType3: iconsOnly ? NumberElementType.ICONS : getRandomNumberElementType()
    };
}

/* add challenge max sum 5 */
export const newChallengeLevel1 = (): ChallengeSpecification => {
    return newChallengeAddition(5, ResultSelectorType.ICONS, false, true);
}

/* add challenge max sum 8 */
export const newChallengeLevel2 = (): ChallengeSpecification => {
    return newChallengeAddition(8, ResultSelectorType.ICONS, false, true);
}

/* add challenge max sum 10 */
export const newChallengeLevel3 = (): ChallengeSpecification => {
    const resultEntry = randomResultEntry(0.1);
    return newChallengeAddition(10, resultEntry, false, false);
}

/* sub challenge max sum 5 */
export const newChallengeLevel4 = (): ChallengeSpecification => {
    return newChallengeSubtraction(5, ResultSelectorType.ICONS, false, true);
}

/* add challenge max sum 15 */
export const newChallengeLevel5 = (): ChallengeSpecification => {
    const resultEntry = randomResultEntry(0.2);
    return newChallengeAddition(15, resultEntry, false, false);
}

/* sub challenge max sum 8 */
export const newChallengeLevel6 = (): ChallengeSpecification => {
    const resultEntry = randomResultEntry(0.1);
    return newChallengeSubtraction(8, resultEntry, false, true);
}


/* type 2 challenge has a sum of maximum 15 */
export const newChallengeLevel7 = (): ChallengeSpecification => {
    const resultEntry = randomResultEntry(0.5);
    const r = Math.random();
    if (r < 0.5) {
        return newChallengeSubtraction(8, resultEntry, true, false);
    } else {
        return newChallengeAddition(15, resultEntry, true, false);
    }
}

/* add challenge max sum 20 */
export const newChallengeLevel8 = (): ChallengeSpecification => {
    const resultEntry = randomResultEntry(0.6);
    return newChallengeAddition(20, resultEntry, true, false);
}

/* sub challenge max sum 12 */
export const newChallengeLevel9 = (): ChallengeSpecification => {
    const resultEntry = randomResultEntry(0.6);
    return newChallengeSubtraction(12, resultEntry, true, false);
}

export const newChallengeLevel10 = (): ChallengeSpecification => {
    const resultEntry = randomResultEntry(0.7);
    const r = Math.random();
    if (r < 0.5) {
        return newChallengeSubtraction(20, resultEntry, true, false);
    } else {
        return newChallengeAddition(12, resultEntry, true, false);
    }
}

const randomResultEntry = (max: number): ResultSelectorType => {
    return (Math.random() < max) ? ResultSelectorType.NUMBER_ENTRY : ResultSelectorType.ICONS;
}

export const newChallenge = (level: number): ChallengeSpecification => {
    switch (level) {
        case 1:
            return newChallengeLevel1();
        case 2:
            return newChallengeLevel2();
        case 3: 
            return newChallengeLevel3();
        case 4:
            return newChallengeLevel4();
        case 5:
            return newChallengeLevel5();
        case 6: 
            return newChallengeLevel6();
        case 7:
            return newChallengeLevel7();
        case 8:
            return newChallengeLevel8();
        case 9: 
            return newChallengeLevel9();
        case 10: 
            return newChallengeLevel10();
        default:
            return newChallengeLevel1();
    }
}
