import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import FooterLogo from "../Assets/Svg/FooterLogo.svg";
import MuiButtons from "./MuiButtons";
import ButtonsTheme from "../Themes/ButtonsTheme";

const Footer = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <img width={262} height={34} src={FooterLogo} alt="" />
        <Typography variant="subtitle2">
          Copyright © 2021 BRIX Templates | All Rights Reserved
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          label="Enter your Email"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ButtonsTheme variant="contained">Subscribe</ButtonsTheme>
                {/* <MuiButtons>Subscribe</MuiButtons> */}
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Box>
    </Box>
  );
};

export default Footer;
