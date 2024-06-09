import React from "react";
import { useState, useEffect } from "react";
import { TextField, FormLabel, FormControl, Button } from "@mui/material";
import { LongAnswerQuestionProps } from "./LongAnswerQuestionTypes";

export const LongAnswerQuestion: React.FC<LongAnswerQuestionProps> = ({
  id,
  question,
  onClickNext,
  additionalText,
  finishQuiz,
}) => {
  const [longAnswer, setLongAnswer] = useState<string[]>([]);

  useEffect(() => {
    setLongAnswer([]);
  }, [id]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLongAnswer([value]);
  };

  const handleSubmit = (): void => {
    onClickNext(longAnswer);
  };

  return (
    <FormControl sx={{ marginTop: 3 }} component="fieldset">
      <FormLabel
        sx={{
          marginBottom: 2,
          fontSize: 18,
          fontWeight: "bold",
          color: "#000000",
        }}
        component="legend"
        id="long-answer"
      >
        {question}
      </FormLabel>
      <TextField
        sx={{ maxWidth: 600 }}
        variant="outlined"
        multiline
        rows={4}
        value={longAnswer[0]}
        label={additionalText}
        onChange={handleInputChange}
        fullWidth
      />

      <Button
        onClick={handleSubmit}
        variant="contained"
        color="error"
        disabled={longAnswer.length === 0}
        sx={{ marginTop: 3, maxWidth: 200 }}
      >
        {finishQuiz ? "Заверишть тестирование" : "Ответить"}
      </Button>
    </FormControl>
  );
};
