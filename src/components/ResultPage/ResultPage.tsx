import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ResultPageProps, ResultPageState } from "./ResultPageTypes";

export const ResultPage: React.FC<ResultPageProps> = ({ userAnswers }) => {
  const [result, setResult] = useState<ResultPageState>({
    correctAnswers: 0,
    wrongAnswers: 0,
    longAnswer: "",
  });

  useEffect(() => {
    const tempResult = {
      correctAnswers: 0,
      wrongAnswers: 0,
      longAnswer: "",
    };

    userAnswers.forEach((item) => {
      const { typeQuestion, rightAnswer, userAnswer } = item;

      const rightAnswerStr = Array.isArray(rightAnswer)
        ? rightAnswer.join(" ").toLowerCase()
        : rightAnswer;
      const userAnswerStr = Array.isArray(userAnswer)
        ? userAnswer.join(" ").toLowerCase()
        : userAnswer;

      switch (typeQuestion) {
        case "singleOption":
        case "multipleOptions":
        case "shortAnswer":
          if (rightAnswerStr === userAnswerStr) {
            tempResult.correctAnswers += 1;
          } else {
            tempResult.wrongAnswers += 1;
          }
          break;
        case "longAnswer":
          tempResult.longAnswer = userAnswerStr;
          break;
      }
    });
    setResult(tempResult);
  }, [userAnswers]);

  return (
    <Box>
      <Typography variant="h2" sx={{ fontSize: 40 }}>
        Результат вашего теста:
      </Typography>
      <Stack>
        <span> Всего вопросов: {userAnswers.length} </span>
        <span> Правильных ответов: {result.correctAnswers} </span>
        <span> Неправильных ответов: {result.wrongAnswers}</span>
        <p> Ваш ответ на развернутый вопрос: {result.longAnswer}</p>
      </Stack>
    </Box>
  );
};
