import { useState } from "react";
import ButtonTh from "./Themes/ButtonsTheme";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "./store";

import StepperPage from "./Pages/StepperPage";
import { Box } from "@mui/system";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

function App() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [comp, setComp] = useState(0);
  const [themeValue, setTemeValue] = useState(true);

  const handleClick = () => {
    setValue(value + 1);
    setComp(value + 1);
  };
  const handleNegClick = () => {
    setValue(value - 1);
    setComp(value - 1);
  };
  const toggleTheme = () => {
    setTemeValue(!themeValue);
    dispatch(changeTheme(themeValue));
  };
  const valueOfTheme = useSelector((state) => {
    console.log(state);
    return state.theme.theme;
  });

  let content = (
    <Box>
      <ButtonTh onClick={toggleTheme} variant="contained">
        change Theme
      </ButtonTh>

      <StepperPage
        comp={comp}
        value={value}
        onNegChange={handleNegClick}
        onChange={handleClick}
      />
    </Box>
  );

  return (
    <div>
      {valueOfTheme === true ? (
        <div>{content}</div>
      ) : (
        <div>
          <Box sx={{ backgroundColor: "black" }}>
            <ButtonTh onClick={toggleTheme} variant="contained">
              change Theme
            </ButtonTh>

            <StepperPage
              comp={comp}
              value={value}
              onNegChange={handleNegClick}
              onChange={handleClick}
              valueOfTheme={valueOfTheme}
            />
          </Box>
        </div>
      )}
    </div>
  );
}

export default App;
