export const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


export const formatTime = (): string => new Date().toLocaleTimeString();

export const getMessageForResult = (
  didWin: boolean,
  sliderValue: number,
  newRandomNumber: number
): string => {
  if (didWin) {
    return "You won";
  } else {
    return sliderValue < newRandomNumber ? "Number was higher" : "Number was lower";
  }
};