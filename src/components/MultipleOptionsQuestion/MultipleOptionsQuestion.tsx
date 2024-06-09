import React from "react";
import { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import {
  MultipleOptionsQuestionProps,
  StateMultipleOptions,
} from "./MultipleOptionsQuestionTypes";

export const MultipleOptionsQuestion: React.FC<MultipleOptionsQuestionProps> =
 ({ question, id, options, additionalText, onClickNext }) => {

  const [multipleOptions, setMultipleOptions] = useState<StateMultipleOptions>([]);

  useEffect(() => {setMultipleOptions([])}, [id])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id: eventId, value, checked } = event.target;
    if (checked) {
      setMultipleOptions((prev) => [...prev, { eventId, value }]);
    } else {
      setMultipleOptions((prev) =>
        prev.filter((input) => input.eventId !== eventId)
      );
    }
  };
  const resultAnswers = multipleOptions.map((item) => item.value);
  const handleSubmit = () : void => {
    onClickNext(resultAnswers);
  };
  return (
    <FormControl component="fieldset" sx={{ marginTop: 3 }}>
      <FormLabel component="legend" sx={{fontSize: 18, fontWeight:"bold", color: "#000000"}}>
        {question}
       {additionalText}
       </FormLabel>
      {options?.map((option, index) => (
        <FormControlLabel
          key={`${id}-${index}`}
          control={
            <Checkbox
              value={option} 
              checked={resultAnswers?.includes(option)}
              id={option}
              onChange={handleInputChange}
            />
          }
          label={option}
        />
      ))}
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="error"
        disabled={multipleOptions.length <= 1}
        sx={{ marginTop: 3, maxWidth: 200}}
      >
        Ответить
      </Button>
    </FormControl>
  );
};
