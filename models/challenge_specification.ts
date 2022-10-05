import { NumberElementType } from "../components/number/number_element";

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
