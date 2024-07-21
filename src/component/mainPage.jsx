import { alpha, Button, Grid, Typography } from "@mui/material";
import Sidebar from "./sidebar";
import { theme } from "../utils/theme";
import symbolSec from "../assets/symbolSec.png";
import { v4 as uuidv4 } from "uuid";
import {
  aiIcon,
  BotAiName,
  buttons,
  howCanIHelpYouCaption,
  searchBar,
  searchGrid,
} from "./main-style";
import Cards from "./card/card";
import { useEffect, useState, useCallback } from "react";
import responseData from "../utils/response-data/response-data";
import Messenging from "./messeger/messenging";
import CustomDialog from "../common/custom-dialog/custom-dialog";
import bulb from "../assets/bulb.png";
import HistoryData from "./historyData/historyData";

function MainBotAi() {
  const [chartQuestions, setChartQuestions] = useState("");
  const [onSubmitText, setOnSubmitText] = useState("");
  const [answers, setAnswers] = useState("");
  const [previousQnA, setPreviousQnA] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [feedBack, setFeedBack] = useState("");
  const [formFeedBack, setFormFeedBack] = useState("");

  //data retriving from localstorage
  const [localstorageData, setLocalstorageData] = useState(null);
  // const [localstorageKey, setLocalStorageKey] = useState(null);

  const RecieveLocalStorageData = (data, key) => {
    setLocalstorageData(data);
    // setLocalStorageKey(key);
  };

  const handleOpenDialog = () => setOpenDialog(true);

  const handleChartQuestions = (e) => setChartQuestions(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOnSubmitText(chartQuestions);
  };

  const handleSubmitFeedBackForm = (e) => {
    e.preventDefault();
    setFormFeedBack(feedBack);
  };

  const handleBotAi = useCallback(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const question = responseData.find((q) => q.question === onSubmitText);

    const response = question
      ? question.response
      : "As an AI Language Model, I don’t have the details";
    setAnswers(response);
    setPreviousQnA((prev) => [
      ...prev,
      {
        question: onSubmitText,
        response,
        time: timeString,
        feedBack: formFeedBack,
      },
    ]);
  }, [onSubmitText, formFeedBack]);

  useEffect(() => {
    if (onSubmitText) {
      handleBotAi();
      setChartQuestions("");
    }
  }, [onSubmitText, handleBotAi]);

  const storingData = useCallback(() => {
    const storeDataInLocalStorage = JSON.stringify(previousQnA);
    const uniqueId = uuidv4();
    localStorage.setItem(`Prev ${uniqueId}`, storeDataInLocalStorage);
    setOpenDialog(false);
    setFeedBack("");
  }, [previousQnA]);

  return (
    <Grid container sx={{ display: "flex" }}>
      <Grid item xs={2}>
        <Sidebar
          formFeedBack={formFeedBack}
          RecieveLocalStorageData={RecieveLocalStorageData}
        />
      </Grid>
      <Grid
        item
        xs={10}
        sx={{
          bgcolor: alpha(theme.palette.secondary.main, 0.5),
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid sx={{ paddingLeft: "40px", paddingTop: "10px" }}>
          <Typography sx={BotAiName}>Bot AI</Typography>
        </Grid>
        <Grid sx={{ height: "92vh", position: "relative" }}>
          {!answers && !localstorageData && (
            <Grid sx={howCanIHelpYouCaption}>
              <Typography sx={{ fontSize: "35px", fontWeight: 600 }}>
                How Can I Help You Today?
              </Typography>
              <Grid sx={{ objectFit: "contain" }}>
                <img src={symbolSec} alt="Symbol" style={aiIcon} />
              </Grid>
            </Grid>
          )}

          {localstorageData ? (
            <HistoryData localstorageData={localstorageData} />
          ) : answers ? (
            <Messenging previousQnA={previousQnA} />
          ) : (
            <Cards />
          )}

          <form
            onSubmit={handleSubmit}
            style={{
              position: "absolute",
              bottom: "5px",
              right: "10px",
              left: "10px",
            }}
          >
            <Grid sx={searchGrid}>
              <input
                type="text"
                placeholder="Ask Me"
                style={searchBar}
                value={chartQuestions}
                onChange={handleChartQuestions}
              />
              <Button type="submit" sx={buttons}>
                Ask
              </Button>
              <Button
                onClick={handleOpenDialog}
                disabled={previousQnA.length === 0}
                sx={buttons}
              >
                Save
              </Button>
            </Grid>

            <CustomDialog
              onClose={() => setOpenDialog(false)}
              open={openDialog}
              title={
                <Grid sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                  <img src={bulb} alt="img" />
                  <Typography fontSize={"20px"}>
                    Provide Additional Feedback
                  </Typography>
                </Grid>
              }
              buttonName={["Save"]}
            >
              <form onSubmit={handleSubmitFeedBackForm}>
                <Grid width={"500px"} height={"300px"}>
                  <textarea
                    id="w3review"
                    name="w3review"
                    rows="15"
                    cols="58"
                    style={{ padding: "10px" }}
                    value={feedBack}
                    onChange={(e) => setFeedBack(e.target.value)}
                  ></textarea>
                  <Grid
                    sx={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      type="submit"
                      sx={{
                        bgcolor: alpha(theme.palette.primary.light, 0.3),
                        color: "black",
                        fontSize: "14px",
                        fontWeight: 600,
                      }}
                      onClick={storingData}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CustomDialog>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MainBotAi;
