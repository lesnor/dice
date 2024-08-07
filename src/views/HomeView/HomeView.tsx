import React, { FC } from "react";
import { Box, Button } from "@mui/material";
import RadioGroupFields from "@/components/fields/RadioGroupFields";
import NumberScreen from "@/components/shared/NumberScreen";
import SliderField from "@/components/fields/SliderField";
import CustomSnackbar from "@/components/shared/Snackbar";
import { HISTORY_GAME_TABLE_CELLS } from "@/utils/constants";
import { marks } from "./data/sliderMarks";
import { useStyles } from "./HomeView.syles";
import CustomTable from "@/components/shared/Table";
import { useHandleHome } from "@/hooks/useHandleHome";

const HomeView: FC = () => {
  const styles = useStyles();

  const {
    handlePlay,
    handleSliderChange,
    handleSnackbarClose,
    handleThresholdChange,
    randomNumber,
    rows,
    snackbarMessage,
    snackbarOpen,
    snackbarSeverity,
    isButtonDisabled,
  } = useHandleHome();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={15}>
      <NumberScreen number={randomNumber} />
      <CustomSnackbar
        handleClose={handleSnackbarClose}
        open={snackbarOpen}
        severity={snackbarSeverity}
        message={snackbarMessage}
      />
      <RadioGroupFields
        name="thresholdSelector"
        handleChange={handleThresholdChange}
      />
      <SliderField
        track="inverted"
        valueLabelDisplay="on"
        defaultValue={0}
        marks={marks}
        onChange={handleSliderChange}
        sx={styles.slider}
      />
      <Button
        variant="contained"
        sx={styles.button}
        color="primary"
        onClick={handlePlay}
        disabled={isButtonDisabled}
      >
        Play
      </Button>

      {rows?.length > 0 && (
        <Box maxWidth={600} width="100%" mt={2}>
          <CustomTable rows={rows} cells={HISTORY_GAME_TABLE_CELLS} />
        </Box>
      )}
    </Box>
  );
};

export default HomeView;
