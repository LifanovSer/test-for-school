export interface ShortAnswerQuestionProps {
    id: number;
    question: string;
    onClickNext: (data: string[]) => void
    additionalText?: string;
    textValue?: string[];
}