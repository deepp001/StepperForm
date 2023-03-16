import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const defaultTheme = createTheme();

const theme = createTheme({
  components: {
    MuiTextField: {
      variants: [
        {
          props: { variant: "outlined" },
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
  label,
  variant,
  value,
  onChange,
  error,
  helperText,
}) {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        label={label}
        variant={variant}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 50,
          },
        }}
      ></TextField>
    </ThemeProvider>
  );
}
