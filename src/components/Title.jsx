import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

let Content = (
  <div>
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color="white" variant="h5">
          Get a project quote
        </Typography>
        <Typography variant="subtitle2" color="white" display={"flex"}>
          Go Please fill the form below to receive a quote for your project.
          Feel free to add as much detail as needed.
        </Typography>
      </Box>
    </div>
  </div>
);

const Title = () => {
  const valueOfTheme = useSelector((state) => {
    return state.theme.theme;
  });
  return (
    <>
      <div>
        {valueOfTheme === false ? (
          <div>{Content}</div>
        ) : (
          <div>
            <div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography color="black" variant="h5">
                  Get a project quote
                </Typography>
                <Typography color="black" variant="subtitle2" display={"flex"}>
                  Go Please fill the form below to receive a quote for your
                  project. Feel free to add as much detail as needed.
                </Typography>
              </Box>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Title;
