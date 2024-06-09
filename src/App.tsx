import { useState, useEffect } from "react";
import { Button, Box, Stack, Typography } from "@mui/material";
import { Quiz } from "./components/Quiz/Quiz";

const App = () => {
  const [startGame, setStartGame] = useState<boolean>(() => {
    const storageData = window.localStorage.getItem("START_GAME");
    return storageData !== null ? JSON.parse(storageData) : false;
  });

  useEffect(() => {
    window.localStorage.setItem("START_GAME", JSON.stringify(startGame));
  }, [startGame]);

  const onClickStartQuiz = (): void => {
    setStartGame(true);
  };

  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        maxWidth: 1200,
        padding: 4,
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -25%)",
      }}
    >
      {startGame ? (
        <Quiz />
      ) : (
        <Stack>
          <Typography variant="h1" sx={{ fontSize: 50 }}>
            Тест на знание городов
          </Typography>
          <Button
            onClick={onClickStartQuiz}
            variant="contained"
            color="error"
            sx={{ marginTop: 3, maxWidth: 250 }}
          >
            Начать тестирование
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default App;
