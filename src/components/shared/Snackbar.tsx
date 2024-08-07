import React, { FC } from "react";
import {
  Alert,
  AlertProps,
  Snackbar as MuiSnackbar,
  Typography,
} from "@mui/material";

interface CustomSnackbarProps {
  handleClose: () => void;
  open: boolean;
  message?: string;
  severity?: AlertProps["severity"];
}

const CustomSnackbar: FC<CustomSnackbarProps> = ({
  handleClose,
  open,
  severity = "success",
  message = "You won",
}) => {
  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={1200}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={severity} variant="filled">
        {severity === "error" && (
          <Typography fontSize={16}>You lost</Typography>
        )}
        <Typography fontSize={14}>{message}</Typography>
      </Alert>
    </MuiSnackbar>
  );
};

export default CustomSnackbar;
