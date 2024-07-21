import { alpha } from "@mui/material";
import { theme } from "../../utils/theme";

export const boxOfHistoryConveration = {
  minHeight: "100px",
  padding: "20px",
  margin: "30px",
  bgcolor: alpha(theme.palette.primary.light, 0.6),
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  rowGap: 10,
};

export const innerHistoryContent = { display: "flex", columnGap: 2 };
export const avatarStyle = {
  borderRadius: "40px",
  width: "70px",
  height: "73px",
};

export const displayTimeStyle = {
  color: "#0000009E",
};
