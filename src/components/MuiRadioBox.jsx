import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const MuiRadioBox = ({ onChange }) => {
  const valueOfTheme = useSelector((state) => {
    return state.theme.theme;
  });
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
    const value = event.target.value;
    onChange(value);
  };
  const changeRadio = {
    "& .MuiSvgIcon-root": {
      fontSize: 28,
      color: "white",
      "&.Mui-checked": {
        color: "white",
      },
    },
  };

  return (
    <Box>
      <Box my={3}>
        <Typography
          color={valueOfTheme === false ? "white" : "black"}
          variant="h5"
        >
          What's your project budget?
        </Typography>
        <Typography
          color={valueOfTheme === false ? "white" : "black"}
          variant="subtitle2"
        >
          Please select the project budget range you have in mind.
        </Typography>
      </Box>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <Grid container>
            <Grid item xs={6}>
              <Box
                border={1}
                borderRadius={5}
                borderColor={valueOfTheme === false ? "white" : "black"}
                p={1}
                m={2}
              >
                <FormControlLabel
                  value="$5.000 - $10.000"
                  sx={
                    valueOfTheme === false
                      ? { "& .MuiFormControlLabel-label": { color: "white" } }
                      : { "& .MuiFormControlLabel-label": { color: "black" } }
                  }
                  control={
                    <Radio
                      sx={
                        valueOfTheme === false
                          ? changeRadio
                          : {
                              "& .MuiSvgIcon-root": {
                                fontSize: 28,
                                color: "black",
                                "&.Mui-checked": {
                                  color: "black",
                                },
                              },
                            }
                      }
                    />
                  }
                  label="$5.000 - $10.000"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                border={1}
                borderRadius={5}
                borderColor={valueOfTheme === false ? "white" : "black"}
                p={1}
                m={2}
              >
                <FormControlLabel
                  value="$10.000 - $20.000"
                  sx={
                    valueOfTheme === false
                      ? { "& .MuiFormControlLabel-label": { color: "white" } }
                      : { "& .MuiFormControlLabel-label": { color: "black" } }
                  }
                  control={
                    <Radio
                      sx={
                        valueOfTheme === false
                          ? changeRadio
                          : {
                              "& .MuiSvgIcon-root": {
                                fontSize: 28,
                                color: "black",
                                "&.Mui-checked": {
                                  color: "black",
                                },
                              },
                            }
                      }
                    />
                  }
                  label="$10.000 - $20.000"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                border={1}
                borderRadius={5}
                borderColor={valueOfTheme === false ? "white" : "black"}
                p={1}
                m={2}
              >
                <FormControlLabel
                  value="$20.000 - $50.000"
                  sx={
                    valueOfTheme === false
                      ? { "& .MuiFormControlLabel-label": { color: "white" } }
                      : { "& .MuiFormControlLabel-label": { color: "black" } }
                  }
                  control={
                    <Radio
                      sx={
                        valueOfTheme === false
                          ? changeRadio
                          : {
                              "& .MuiSvgIcon-root": {
                                fontSize: 28,
                                color: "black",
                                "&.Mui-checked": {
                                  color: "black",
                                },
                              },
                            }
                      }
                    />
                  }
                  label="$20.000 - $50.000"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                border={1}
                borderRadius={5}
                borderColor={valueOfTheme === false ? "white" : "black"}
                p={1}
                m={2}
              >
                <FormControlLabel
                  value="$50.000 +"
                  sx={
                    valueOfTheme === false
                      ? { "& .MuiFormControlLabel-label": { color: "white" } }
                      : { "& .MuiFormControlLabel-label": { color: "black" } }
                  }
                  control={
                    <Radio
                      sx={
                        valueOfTheme === false
                          ? changeRadio
                          : {
                              "& .MuiSvgIcon-root": {
                                fontSize: 28,
                                color: "black",
                                "&.Mui-checked": {
                                  color: "black",
                                },
                              },
                            }
                      }
                    />
                  }
                  label="$50.000 +"
                  // formControlLabelProps={
                  //   valueOfTheme === false
                  //     ? { style: { color: "white" } }
                  //     : { style: { color: "black" } }
                  // }
                />
              </Box>
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadioBox;
