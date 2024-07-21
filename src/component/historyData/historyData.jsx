import { Grid, Rating, Typography } from "@mui/material";
import PropTypes from "prop-types";
import {
  avatarStyle,
  boxOfHistoryConveration,
  displayTimeStyle,
  innerHistoryContent,
} from "./historyData-style";
import avatar from "../../assets/avatar.png";
import symbolSec from "../../assets/symbolSec.png";
// import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function HistoryData({ localstorageData }) {
  // const navigate = useNavigate();

  useEffect(() => {
    // Example effect, you can modify as needed
    console.log("Component mounted or updated");
  }, []);

  return (
    <Grid style={{ width: "100%", height: "90%", overflow: "auto" }}>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}>Conversation History</Typography>
      </Grid>
      <Grid>
        <Typography>All Chats</Typography>
        <Link to="/messenger">Back to Messenger</Link>
        {localstorageData.map((ele, index) => (
          <Grid key={index} sx={boxOfHistoryConveration}>
            <Grid sx={innerHistoryContent}>
              <img src={avatar} style={avatarStyle} />
              <Grid>
                <Typography sx={{ fontWeight: 700 }}>You</Typography>
                <Typography sx={{ marginTop: "10px" }}>
                  {ele.question}
                </Typography>
                <Typography sx={displayTimeStyle}>{ele.time}</Typography>
              </Grid>
            </Grid>

            <Grid sx={innerHistoryContent}>
              <img src={symbolSec} style={avatarStyle} />
              <Grid>
                <Typography sx={{ fontWeight: 700 }}>Soul AI</Typography>
                <Typography sx={{ marginTop: "10px" }}>
                  {ele.response}
                </Typography>
                <Grid sx={{ display: "flex", marginTop: "15px", columnGap: 4 }}>
                  <Typography sx={displayTimeStyle}>{ele.time}</Typography>
                  <Typography>
                    <Rating
                      name="read-only"
                      value={3}
                      size="small"
                      sx={{ color: "black" }}
                      readOnly
                    />
                  </Typography>
                </Grid>
                <Typography>
                  <span style={{ fontWeight: 700 }}>Feedback:</span>
                  {ele.feedback}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

HistoryData.propTypes = {
  localstorageData: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      response: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      feedback: PropTypes.string,
    })
  ).isRequired,
  localstorageKey: PropTypes.string,
};

export default HistoryData;
