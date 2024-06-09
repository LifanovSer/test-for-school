import { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import { SingleOptionQuestionProps } from "./TypesSingleOptionQuestion";
import { memo } from "react";

export const SingleOptionQuestion: React.FC<SingleOptionQuestionProps> = memo(
  ({ question, id, options, onClickNext }) => {
    const [singleOption, setSingleOption] = useState<string[]>([]);

    useEffect(() => {
      setSingleOption([]);
    }, [id]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSingleOption([value]);
    };

    const handleSubmit = (): void => {
      onClickNext(singleOption);
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
          id="radio-buttons-group-label"
        >
          {question}
        </FormLabel>
        <RadioGroup
          aria-labelledby="radio-buttons-group-label"
          defaultValue={question}
          name="radio-buttons-group"
          value={singleOption}
          onChange={handleInputChange}
        >
          {options?.map((option, index) => {
            return (
              <FormControlLabel
                key={`${id}-${index}`}
                value={option}
                control={<Radio />}
                label={option}
                id={option}
              />
            );
          })}
        </RadioGroup>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="error"
          disabled={singleOption.length === 0}
          sx={{ marginTop: 3, maxWidth: 200 }}
        >
          Ответить
        </Button>
      </FormControl>
    );
  }
);
