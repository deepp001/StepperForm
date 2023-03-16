import { Box, Typography } from "@mui/material";
import React from "react";

const Title = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">Get a project quote</Typography>
      <Typography variant="subtitle2" display={"flex"}>
        Go Please fill the form below to receive a quote for your project. Feel
        free to add as much detail as needed.
      </Typography>
    </Box>
  );
};

export default Title;
