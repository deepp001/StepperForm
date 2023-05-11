import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
let content = (
  <Box my={3}>
    <Typography color="white" variant="h5">
      Contact details
    </Typography>
    <Typography color="white" variant="subtitle1">
      Please fill in information so we can get in touch
    </Typography>
  </Box>
);

const MuiTypography = () => {
  const valueOfTheme = useSelector((state) => {
    return state.theme.theme;
  });
  return (
    <div>
      {valueOfTheme === false ? (
        <div>{content}</div>
      ) : (
        <Box my={3}>
          <Typography color="black" variant="h5">
            Contact details
          </Typography>
          <Typography color="black" variant="subtitle1">
            Please fill in information so we can get in touch
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default MuiTypography;
