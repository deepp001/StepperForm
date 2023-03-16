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

const MuiRadio2 = ({ onChange }) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
    const value = event.target.value;
    onChange(value);
  };
  return (
    <Box>
      <Box my={3}>
        <Typography variant="h5">Our services</Typography>
        <Typography variant="subtitle2">
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
              <Box border={1} borderRadius={5} m={2} p={1}>
                <FormControlLabel
                  value="Development"
                  control={<Radio />}
                  label="Development"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box border={1} borderRadius={5} m={2} p={1}>
                <FormControlLabel
                  value="Web Design"
                  control={<Radio />}
                  label="Web Design"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box border={1} borderRadius={5} m={2} p={1}>
                <FormControlLabel
                  value="Marketing"
                  control={<Radio />}
                  label="Marketing"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box border={1} borderRadius={5} m={2} p={1}>
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
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
