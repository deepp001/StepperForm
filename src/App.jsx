import { useState } from "react";
// import ThemeProvider from "./Theme/overrides/index";

import StepperPage from "./Pages/StepperPage";

function App() {
  const [value, setValue] = useState(0);
  const [comp, setComp] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
    setComp(value + 1);
  };
  const handleNegClick = () => {
    setValue(value - 1);
    setComp(value - 1);
  };

  return (
    <StepperPage
      comp={comp}
      value={value}
      onNegChange={handleNegClick}
      onChange={handleClick}
    />
  );
}

export default App;
