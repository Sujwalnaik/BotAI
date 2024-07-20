import { Grid, Typography } from "@mui/material";
import { card, cardCaption, cardText } from "../main-style";

function Cards() {
  return (
    <Grid
      sx={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        rowGap: 4,
      }}
      item
      xs={12}
    >
      <Grid
        display={"flex"}
        gap={10}
        justifyContent={"center"}
        paddingX={"20px"}
      >
        <Grid item xs={6} sx={card}>
          <Typography sx={cardText}>Hi, what is the weather</Typography>
          <Typography sx={cardCaption}>
            Get immediate AI generated response
          </Typography>
        </Grid>
        <Grid item xs={6} sx={card}>
          <Typography sx={cardText}>Hi, what is the temperature</Typography>
          <Typography sx={cardCaption}>
            Get immediate AI generated response
          </Typography>
        </Grid>
      </Grid>
      <Grid
        display={"flex"}
        gap={10}
        justifyContent={"center"}
        paddingX={"20px"}
      >
        <Grid item xs={6} sx={card}>
          <Typography sx={cardText}>Hi, what is my location</Typography>
          <Typography sx={cardCaption}>
            Get immediate AI generated response
          </Typography>
        </Grid>
        <Grid item xs={6} sx={card}>
          <Typography sx={cardText}>Hi, how are you</Typography>
          <Typography sx={cardCaption}>
            Get immediate AI generated response
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Cards;
