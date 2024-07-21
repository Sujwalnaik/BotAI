import { Grid } from "@mui/material";
import "./App.css";
import MainBotAi from "./component/mainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Messenger from "./component/messeger/messenging";
import HistoryData from "./component/historyData/historyData";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainBotAi />,
      children: [
        {
          path: "messenger",
          element: <Messenger />,
        },
        { path: "history", element: <HistoryData /> },
      ],
    },
  ]);
  return (
    <Grid sx={{ margin: "0px" }}>
      {/* <MainBotAi /> */}
      <RouterProvider router={router} />
    </Grid>
  );
}

export default App;
