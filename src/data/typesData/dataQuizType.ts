export enum TypeQuestions {
    SingleOption = "singleOption",
    MultipleOptions = "multipleOptions",
    ShortAnswer = "shortAnswer", 
    LongAnswer = "longAnswer", 
    TrueFalse = "true/false",
    choosePicture = "choosePicture",
}

export interface QuizData {
    id: number;
    type: TypeQuestions
    question: string;
    options?: string[];
    additionalText?: string;
    rightAnswer?: string[];
}


export type QuizDataArray = QuizData[]


