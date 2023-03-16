import { Box } from "@mui/system";
import React from "react";

import Logo from "../Assets/Svg/Logo.svg";
import ButtonsTheme from "../Themes/ButtonsTheme";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const OnAdmin = () => {
    navigate("/admin");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <img src={Logo} alt="/" />
      <ButtonsTheme onClick={OnAdmin} variant="contained">
        Go To Admin Panel
      </ButtonsTheme>
    </Box>
  );
};

export default Header;
