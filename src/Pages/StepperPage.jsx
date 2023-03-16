import { Box } from "@mui/system";
import React from "react";
import MuiCard from "../components/MuiCard";
import Title from "../components/Title";

import Footer from "../components/Footer";
import Header from "../components/Header";

const StepperPage = ({ value, onNegChange, onChange, comp }) => {
  return (
    <Box>
      <Header />

      <Title />
      <MuiCard
        value={value}
        onNegChange={onNegChange}
        onChange={onChange}
        comp={comp}
      />
      <Footer />
    </Box>
  );
};

export default StepperPage;
