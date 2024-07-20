import { alpha, Grid, IconButton, Typography } from "@mui/material";
import { theme } from "../../utils/theme";
import avatar from "../../assets/avatar.png";
import PropTypes from "prop-types";
import { userQuestionGrid } from "./messenger-style";
import symbolSec from "../../assets/symbolSec.png";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { useState } from "react";

Messenger.propTypes = {
  previousQnA: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      response: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function Messenger({ previousQnA }) {
  const [liked, setLiked] = useState({});
  const [disliked, setDisliked] = useState({});

  const handleLike = (index) => {
    setLiked((prev) => ({ ...prev, [index]: !prev[index] }));
    if (disliked[index]) setDisliked((prev) => ({ ...prev, [index]: false }));
  };

  const handleDislike = (index) => {
    setDisliked((prev) => ({ ...prev, [index]: !prev[index] }));
    if (liked[index]) setLiked((prev) => ({ ...prev, [index]: false }));
  };
  return (
    <>
      <Grid
        sx={{
          padding: "20px",
          minHeight: "80vh",
          maxHeight: "80vh",
          overflow: "auto",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {previousQnA.map((qna, index) => (
              <Grid container key={index} sx={{ marginBottom: "10px" }}>
                <Grid item xs={12} sx={userQuestionGrid}>
                  <img src={avatar} style={{ borderRadius: "40px" }} />
                  <Grid>
                    <span style={{ fontSize: "16px", fontWeight: 700 }}>
                      You
                    </span>
                    <Typography
                      sx={{
                        fontSize: "17px",
                        // fontWeight: 600,
                        fontFamily: theme.typography.primary,
                      }}
                    >
                      {qna.question}
                    </Typography>
                    <Grid sx={{ marginTop: "10px" }}>
                      <span style={{ color: "#0000009E" }}>{qna.time}</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    bgcolor: alpha(theme.palette.primary.light, 0.5),
                    marginY: "10px",
                    display: "flex",
                    padding: "15px",
                    borderRadius: "20px",
                    columnGap: 2,
                  }}
                >
                  <img
                    src={symbolSec}
                    alt="BotAi"
                    style={{
                      borderRadius: "50px",
                      height: "60px",
                      width: "60px",
                    }}
                  />
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      // rowGap: "5px",
                    }}
                  >
                    <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
                      Soul AI
                    </Typography>
                    <Typography sx={{ fontFamily: theme.typography.primary }}>
                      {qna.response}
                    </Typography>
                    <Grid sx={{ display: "flex", columnGap: 4 }}>
                      <span style={{ marginTop: "10px", color: "#0000009E" }}>
                        {qna.time}
                      </span>
                      <Grid>
                        <IconButton onClick={() => handleLike(index)}>
                          <ThumbUpAltOutlinedIcon
                            fontSize="small"
                            sx={{ color: liked[index] ? "yellow" : "inherit" }}
                          />
                        </IconButton>
                        <IconButton onClick={() => handleDislike(index)}>
                          <ThumbDownOutlinedIcon
                            fontSize="small"
                            sx={{
                              color: disliked[index] ? "yellow" : "inherit",
                            }}
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Messenger;
