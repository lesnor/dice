import { useState } from "react";
import { THRESHOLD_OPTIONS } from "@/utils/constants";
import {
  formatTime,
  getMessageForResult,
  getRandomNumber,
} from "@/utils/helpers";

export const useHandleHome = () => {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("You won");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const [selectedThreshold, setSelectedThreshold] = useState<string>(
    THRESHOLD_OPTIONS.under
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [randomNumber, setRandomNumber] = useState<number>(100);
  const [rows, setRows] = useState<HistoryGameRows[]>([]);

  const handleThresholdChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedThreshold(event.target.value);
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  const handlePlay = () => {
    setIsButtonDisabled(true);
    const newRandomNumber = getRandomNumber(1, 100);
    setRandomNumber(newRandomNumber);

    const isThresholdOver = selectedThreshold === THRESHOLD_OPTIONS.over;
    const isThresholdUnder = selectedThreshold === THRESHOLD_OPTIONS.under;

    const didWin =
      (isThresholdOver && sliderValue < newRandomNumber) ||
      (isThresholdUnder && sliderValue > newRandomNumber);
    const didLose =
      (isThresholdOver && sliderValue >= newRandomNumber) ||
      (isThresholdUnder && sliderValue <= newRandomNumber);

    if (didWin) {
      setSnackbarSeverity("success");
      setSnackbarMessage("You won");
    } else if (didLose) {
      setSnackbarSeverity("error");
      setSnackbarMessage(
        getMessageForResult(didWin, sliderValue, newRandomNumber)
      );
    }

    setSnackbarOpen(true);

    const newRow = {
      time: formatTime(),
      guess: `${selectedThreshold} ${sliderValue}`,
      result: newRandomNumber,
      didWin,
    };

    setRows((prevRows) => {
      const updatedRows = [...prevRows, newRow];
      if (updatedRows.length > 10) {
        updatedRows.shift();
      }
      return updatedRows;
    });
    setTimeout(() => {
        setIsButtonDisabled(false);
      }, 1200);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return {
    randomNumber,
    handleSnackbarClose,
    snackbarOpen,
    snackbarSeverity,
    snackbarMessage,
    handleThresholdChange,
    handleSliderChange,
    handlePlay,
    rows,
    isButtonDisabled
  };
};
