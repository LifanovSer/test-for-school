export interface SingleOptionQuestionProps {
  id: number;
  question: string;
  options: string[] | undefined;
  onClickNext: (data: string[]) => void
  selectedValues?: undefined | string[]; 
  }