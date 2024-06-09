import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { TimerProps } from "./TimerTypes";
import { formatTime } from "./formatTime";

export const Timer: React.FC<TimerProps> = ({
  lengthQuizData,
  setShowResult,
}) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const storageTimeLeft = window.localStorage.getItem("TIME_LEFT");

    return storageTimeLeft !== null
      ? parseInt(JSON.parse(storageTimeLeft))
      : lengthQuizData * 60;
  });

  useEffect(() => {
    window.localStorage.setItem("TIME_LEFT", JSON.stringify(timeLeft));
    if (timeLeft <= 0) {
      setShowResult(true);
      window.localStorage.clear();
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, setShowResult]);

  return (
    <Typography variant="h6">
      Осталось времени: {formatTime(timeLeft)}
    </Typography>
  );
};
