import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
// import { Stepper } from "react-form-stepper";
import StepLabel from "@mui/material/StepLabel";

const steps = ["1", "2", "3", "4"];

const MuiStepper = ({ value }) => {
  return (
    <Box>
      <Box sx={{ padding: 3, borderBottom: 1 }}>
        <Stepper activeStep={value} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
};

export default MuiStepper;
