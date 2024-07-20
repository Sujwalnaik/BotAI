import { theme } from "../utils/theme";

export const card = {
  borderRadius: "10px",
  height: "111px",
  bgcolor: theme.palette.primary.white,
  padding: "15px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};
export const cardText = { fontSize: "20px", fontWeight: 700 };

export const cardCaption = {
  color: "gray",
  marginTop: "10px",
};
export const buttons = {
  bgcolor: theme.palette.primary.light,
  color: "black",
  fontSize: "16px",
  fontWeight: 600,
  padding: "2px 10px",
};

export const searchBar = {
  width: "85%",
  borderRadius: "10px",
  fontSize: "16px",
  padding: "10px",
  outline: "none",
};

export const searchGrid = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

export const aiIcon = {
  width: "85px",
  height: "90px",
  borderRadius: "50%",
};

export const howCanIHelpYouCaption = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  height: "40%",
};
export const BotAiName = {
  fontSize: "30px",
  fontWeight: 700,
  color: theme.palette.primary.main,
};
