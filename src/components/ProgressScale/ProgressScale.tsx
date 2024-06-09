import { ProgressScaleProps } from "./TypesProgressScale";
import { Box, Stack } from "@mui/material";

export const ProgressScale: React.FC<ProgressScaleProps> = ({
  quizItems,
  activeQuestion,
}) => {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      justifyContent={"center"}
      marginTop={3}
    >
      {quizItems.map(function (item, index) {
        let bgColor = "#e1e1e1";
        if (index < activeQuestion) {
          bgColor = "black";
        } else if (index === activeQuestion) {
          bgColor = "red";
        }
        return (
          <Box
            key={item.id}
            sx={(theme) => ({
              width: 50,
              height: 10,
              backgroundColor: bgColor,
              [theme.breakpoints.down("md")]: {
                width: 30,
              },
              [theme.breakpoints.down("sm")]: {
                width: 15,
              },
            })}
          />
        );
      })}
    </Stack>
  );
};
