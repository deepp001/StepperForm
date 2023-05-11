import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const MuiRadio2 = ({ onChange }) => {
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
          Our services
        </Typography>
        <Typography
          color={valueOfTheme === false ? "white" : "black"}
          variant="subtitle2"
        >
          Please select which service you are interested in.
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
                borderColor={valueOfTheme === false ? "white" : "black"}
                borderRadius={5}
                m={2}
                p={1}
              >
                <FormControlLabel
                  value="Development"
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
                  label="Development"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                border={1}
                borderColor={valueOfTheme === false ? "white" : "black"}
                borderRadius={5}
                m={2}
                p={1}
              >
                <FormControlLabel
                  value="Web Design"
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
                  label="Web Design"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                border={1}
                borderColor={valueOfTheme === false ? "white" : "black"}
                borderRadius={5}
                m={2}
                p={1}
              >
                <FormControlLabel
                  value="Marketing"
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
                  label="Marketing"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                border={1}
                borderColor={valueOfTheme === false ? "white" : "black"}
                borderRadius={5}
                m={2}
                p={1}
              >
                <FormControlLabel
                  value="Other"
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
                  label="Other"
                />
              </Box>
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadio2;
