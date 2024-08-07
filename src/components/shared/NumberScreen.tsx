import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

interface NumberScreenProps {
  number: number;
}

const NumberScreen: FC<NumberScreenProps> = ({ number }) => {
  return (
    <Box
      maxWidth={320}
      width="100%"
      height={200}
      bgcolor="#f5f5f5"
      mb={1.5}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography fontSize={96}>{number}</Typography>
    </Box>
  );
};

export default NumberScreen;
