import { useState, useEffect } from "react";
import { StateUserAnswers } from "./TypesQuiz";
import { ProgressScale } from "../ProgressScale/ProgressScale";
import { ResultPage } from "../ResultPage/ResultPage";
import { quizData } from "../../data/quizData";
import { SingleOptionQuestion } from "../SingleOptionQuestion/SingleOptionQuestion";
import { MultipleOptionsQuestion } from "../MultipleOptionsQuestion/MultipleOptionsQuestion";
import { LongAnswerQuestion } from "../LongAnswerQuestion/LongAnswerQuestion";
import { ShortAnswerQuestion } from "../ShortAnswerQuestion/ShortAnswerQuestion";
import { Timer } from "../Timer/Timer";
import { Box, Stack, Typography } from "@mui/material";

export const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(() => {
    const storageActiveQuestion = window.localStorage.getItem("ACTIVE_QUESTION");
    return storageActiveQuestion !== null
      ? JSON.parse(storageActiveQuestion)
      : 0;
  });
  const [showResult, setShowResult] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<StateUserAnswers>(() => {
    const storageAnswers = window.localStorage.getItem("USER_ANSWERS");
    return storageAnswers !== null ? JSON.parse(storageAnswers) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("USER_ANSWERS", JSON.stringify(userAnswers));
    window.localStorage.setItem(
      "ACTIVE_QUESTION",
      JSON.stringify(activeQuestion)
    );
    if (showResult) window.localStorage.clear();
  }, [userAnswers, activeQuestion, showResult]);

  const { id, type, question, options, rightAnswer, additionalText } =
    quizData[activeQuestion];
  const lengthQuizData = quizData.length;

  const onClickNext = (data: string[]): void => {
    setUserAnswers((prevUserAnswers) => [
      ...prevUserAnswers,
      {
        id: id,
        typeQuestion: type,
        rightAnswer: rightAnswer,
        userAnswer: data,
      },
    ]);

    if (activeQuestion !== lengthQuizData - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const renderQuestionComponent = (typeQuestion: string) => {
    switch (typeQuestion) {
      case "singleOption":
        return (
          <SingleOptionQuestion
            question={question}
            id={id}
            options={options}
            onClickNext={onClickNext}
          />
        );
      case "multipleOptions":
        return (
          <MultipleOptionsQuestion
            question={question}
            id={id}
            options={options}
            additionalText={additionalText}
            onClickNext={onClickNext}
          />
        );
      case "shortAnswer":
        return (
          <ShortAnswerQuestion
            id={id}
            question={question}
            additionalText={additionalText}
            onClickNext={onClickNext}
          />
        );
      case "longAnswer":
        return (
          <LongAnswerQuestion
            id={id}
            question={question}
            additionalText={additionalText}
            onClickNext={onClickNext}
            finishQuiz={activeQuestion === lengthQuizData - 1}
          />
        );
      default:
        return <p>Unknown question type</p>;
    }
  };

  return (
    <>
      {showResult ? (
        <ResultPage userAnswers={userAnswers} />
      ) : (
        <Box>
          <Stack>
            <Stack>
              <Typography variant="h2" sx={{ fontSize: 40 }}>
                Тестирование
              </Typography>
              <Timer
                lengthQuizData={lengthQuizData}
                showResult={showResult}
                setShowResult={setShowResult}
              />
            </Stack>
            <ProgressScale
              quizItems={quizData}
              activeQuestion={activeQuestion}
            />
            {renderQuestionComponent(type)}
          </Stack>
        </Box>
      )}
    </>
  );
};
