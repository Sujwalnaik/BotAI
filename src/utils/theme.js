import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(151, 133, 186, 1)",
      light: "rgba(175, 159, 205, 1)",
      white: "rgba(249, 250, 250, 1)",
    },
    secondary: {
      main: "rgba(215, 199, 244, 1)",
      light: "#FFFFFF",
    },
  },
  typography: {
    primary: { fontFamily: "Ubuntu" },
    secondary: { fontFamily: "Open Sans" },
  },
  border: { border: "1px solid" },
});
