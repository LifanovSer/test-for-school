export interface UserAnswers {
  id: number;
  typeQuestion: string;
  rightAnswer: string[] | undefined;
  userAnswer: string[];
}

export type StateUserAnswers = UserAnswers[];

export interface MultiOption {
  id: string;
  answers: string[] | [];
}

export type StateMultipleOptionsQuiz = MultiOption[];
