import React from "react";
import { Box, Button } from "@mui/material";

const MuiButtons = ({ children, onClick }) => {
  return (
    <>
      <Box sx={{ m: 2, p: 2 }}>
        <Button sx={{ borderRadius: 50 }} variant="contained" onClick={onClick}>
          {children}
        </Button>
      </Box>
    </>
  );
};

export default MuiButtons;
