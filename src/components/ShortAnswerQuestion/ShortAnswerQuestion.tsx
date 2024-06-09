import React from "react";
import { useState, useEffect } from "react";
import { TextField, FormLabel, FormControl, Button } from "@mui/material";
import { ShortAnswerQuestionProps } from "./ShortAnswerQuestionTypes";

export const ShortAnswerQuestion: React.FC<ShortAnswerQuestionProps> = ({
  id,
  question,
  additionalText,
  onClickNext,
}) => {
  const [shortAnswer, setShortAnswer] = useState<string[]>([]);

  useEffect(() => {
    setShortAnswer([]);
  }, [id, question, additionalText]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    setShortAnswer([value]);
  };

  const handleSubmit = (): void => {
    onClickNext(shortAnswer);
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
        id="short-answer"
      >
        {question}
      </FormLabel>
      <TextField
        sx={{ maxWidth: 300 }}
        variant="outlined"
        label={additionalText}
        value={shortAnswer}
        onChange={handleInputChange}
        fullWidth
      />
      <Button
        onClick={handleSubmit}
        variant="contained"
        disabled={shortAnswer.length === 0}
        color="error"
        sx={{ marginTop: 3, maxWidth: 200 }}
      >
        Ответить
      </Button>
    </FormControl>
  );
};
