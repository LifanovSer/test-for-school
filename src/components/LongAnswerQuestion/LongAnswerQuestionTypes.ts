export interface LongAnswerQuestionProps {
    id: number;
    question: string;
    onClickNext: (data: string[]) => void;
    finishQuiz: boolean;
    additionalText?: string;
}