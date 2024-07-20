import { alpha } from "@mui/material";
import { theme } from "../../utils/theme";

export const userQuestionGrid = {
  bgcolor: alpha(theme.palette.primary.light, 0.3),
  padding: "15px",
  display: "flex",
  columnGap: 2,
  borderRadius: "20px",
};
