import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CardImage from "../Assets/Svg/CardImg.svg";

import ButtonsTheme from "../Themes/ButtonsTheme";

const Cardcomp = ({ onChange, data }) => {
  const handleSubmit = () => {
    console.log("Submitted");
    onChange({ ...data });
  };
  return (
    <Box my={3} sx={{ textAlign: "center" }}>
      <img src={CardImage} alt="/" />
      <Typography variant="h6">Submit your quote request</Typography>
      <Typography variant="subtitle2">
        Please review all the information you previously typed in the past
        steps, and if all is okay, submit your message to receive a project
        quote in 24 - 48 hours.
      </Typography>
      <ButtonsTheme variant="contained" onClick={handleSubmit}>
        Submit
      </ButtonsTheme>
    </Box>
  );
};

export default Cardcomp;
