import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

const defaultTheme = createTheme();

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            textTransform: "none",
            border: `border ${defaultTheme.palette.primary.main}`,
            borderRadius: "50px",
            color: defaultTheme.palette.primary.main,
          },
        },
        {
          props: { variant: "contained" },
          style: {
            textTransform: "none",
            border: `border ${defaultTheme.palette.primary.main}`,
            borderRadius: "50px",
          },
        },
      ],
    },
  },
});

export default function GlobalThemeVariants({
  onClick,
  children,
  variant,
  type,
  value,
  disabled,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={onClick}
        // value={value}
        type={type}
        variant={variant}
        sx={{ m: 1 }}
        disabled={disabled}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
}
