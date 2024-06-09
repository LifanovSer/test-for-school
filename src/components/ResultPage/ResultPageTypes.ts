export interface UserAnswers {
  id: number;
  typeQuestion: string;
  rightAnswer: string[] | undefined;
  userAnswer: string[];
}

export type StateUserAnswers = UserAnswers[];

export interface ResultPageProps {
  userAnswers: StateUserAnswers;
}

export interface ResultPageState {
  correctAnswers: number;
  wrongAnswers: number;
  longAnswer: string;
}
