import { Box, Typography } from "@mui/material";
import React from "react";

const MuiTypography = () => {
  return (
    <Box my={3}>
      <Typography variant="h5">Contact details</Typography>
      <Typography variant="subtitle1">
        Please fill in information so we can get in touch
      </Typography>
    </Box>
  );
};

export default MuiTypography;
