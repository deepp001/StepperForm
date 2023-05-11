import React from "react";
import { Stack, TextField } from "@mui/material";
import MuiTypography from "./MuiTypography";

import * as yup from "yup";
import { useSelector } from "react-redux";

const validationSchema = yup.object({
  Email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  Name: yup.string("Enter your Name").required("Name is required"),
  Phone: yup.number("Enter your Phone").required("Phone is required"),
  Compony: yup.string("Enter your Compony").required("Compony is required"),
});
let themeColor = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 50,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
};
let textcolor = {
  style: { color: "white" },
};

const MuiTextField = ({ formik }) => {
  const valueOfTheme = useSelector((state) => {
    return state.theme.theme;
  });
  return (
    <>
      <MuiTypography />

      <Stack direction="column" spacing={4}>
        <Stack direction="row" spacing={4}>
          <TextField
            label="Name"
            InputLabelProps={
              valueOfTheme === false
                ? { style: { color: "white" } }
                : { style: { color: "black" } }
            }
            variant="outlined"
            name="Name"
            autoComplete="Name"
            value={formik.values.Name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Name && Boolean(formik.errors.Name)}
            helperText={formik.touched.Name && formik.errors.Name}
            sx={
              valueOfTheme === false
                ? themeColor
                : {
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 50,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                  }
            }
          ></TextField>

          <TextField
            label="Email"
            InputLabelProps={
              valueOfTheme === false
                ? { style: { color: "white" } }
                : { style: { color: "black" } }
            }
            variant="outlined"
            id="Email"
            name="Email"
            value={formik.values.Email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Email && Boolean(formik.errors.Email)}
            helperText={formik.touched.Email && formik.errors.Email}
            sx={
              valueOfTheme === false
                ? themeColor
                : {
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 50,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                  }
            }
          ></TextField>
        </Stack>
        <Stack direction="row" spacing={4}>
          <TextField
            label="Phone"
            InputLabelProps={
              valueOfTheme === false
                ? { style: { color: "white" } }
                : { style: { color: "black" } }
            }
            variant="outlined"
            name="Phone"
            value={formik.values.Phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Phone && Boolean(formik.errors.Phone)}
            helperText={formik.touched.Phone && formik.errors.Phone}
            sx={
              valueOfTheme === false
                ? themeColor
                : {
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 50,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                  }
            }
          ></TextField>
          <TextField
            label="Compony"
            InputLabelProps={
              valueOfTheme === false
                ? { style: { color: "white" } }
                : { style: { color: "black" } }
            }
            variant="outlined"
            name="Compony"
            value={formik.values.Compony}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Compony && Boolean(formik.errors.Compony)}
            helperText={formik.touched.Compony && formik.errors.Compony}
            sx={
              valueOfTheme === false
                ? themeColor
                : {
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 50,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                  }
            }
          ></TextField>
        </Stack>
      </Stack>
    </>
  );
};

export default MuiTextField;
