import { Box } from "@mui/system";
import React from "react";
import MuiCard from "../components/MuiCard";
import Title from "../components/Title";

import Footer from "../components/Footer";
import Header from "../components/Header";

const StepperPage = ({ value, onNegChange, onChange, comp, valueOfTheme }) => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Header />

      <Title valueOfTheme={valueOfTheme} />
      <MuiCard
        value={value}
        onNegChange={onNegChange}
        onChange={onChange}
        comp={comp}
        valueOfTheme={valueOfTheme}
      />
      <Footer />
    </Box>
  );
};

export default StepperPage;
