import React, { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import MuiTypography from "./MuiTypography";
import TextInputTheme from "../Themes/TextInputTheme";
import * as yup from "yup";
import { useFormik } from "formik";
import ButtonsTheme from "../Themes/ButtonsTheme";

const validationSchema = yup.object({
  Email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  Name: yup.string("Enter your Name").required("Name is required"),
  Phone: yup.number("Enter your Phone").required("Phone is required"),
  Compony: yup.string("Enter your Compony").required("Compony is required"),
});

const MuiTextField = ({ formik }) => {
  // const formik = useFormik({
  //   initialValues: {
  //     Email: "",
  //     Name: "",
  //     Phone: "",
  //     Compony: "",
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });
  return (
    <>
      <MuiTypography />
      {/* <form onSubmit={formik.handleSubmit}> */}
      <Stack direction="column" spacing={4}>
        <Stack direction="row" spacing={4}>
          <TextField
            label="Name"
            variant="outlined"
            name="Name"
            autoComplete="Name"
            value={formik.values.Name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Name && Boolean(formik.errors.Name)}
            helperText={formik.touched.Name && formik.errors.Name}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 50,
              },
            }}
          ></TextField>

          <TextField
            label="Email"
            variant="outlined"
            id="Email"
            name="Email"
            value={formik.values.Email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Email && Boolean(formik.errors.Email)}
            helperText={formik.touched.Email && formik.errors.Email}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 50,
              },
            }}
          ></TextField>
        </Stack>
        <Stack direction="row" spacing={4}>
          <TextField
            label="Phone"
            variant="outlined"
            name="Phone"
            value={formik.values.Phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Phone && Boolean(formik.errors.Phone)}
            helperText={formik.touched.Phone && formik.errors.Phone}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 50,
              },
            }}
          ></TextField>
          <TextField
            label="Compony"
            variant="outlined"
            name="Compony"
            value={formik.values.Compony}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Compony && Boolean(formik.errors.Compony)}
            helperText={formik.touched.Compony && formik.errors.Compony}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 50,
              },
            }}
          ></TextField>
        </Stack>
      </Stack>
      {/* <ButtonsTheme type="submit">submit</ButtonsTheme> */}
      {/* </form> */}
    </>
  );
};

export default MuiTextField;
