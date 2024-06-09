export interface MultipleOptionsQuestionProps {
    id: number;
    question: string;
    options: string[] | undefined;
    additionalText: string | undefined;
    onClickNext: (data: string[]) => void
}


export interface MultipleOptions {
    eventId: string;
    value: string
}


export type StateMultipleOptions = MultipleOptions[]