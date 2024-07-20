import { theme } from "../../../utils/theme";

export const customDialogStyles = {
  dialog: {
    "& .MuiDialogContent-root": {
      padding: 10,
      backgroundColor: theme.palette.common.white,
    },
    "& .MuiDialogActions-root": {
      padding: 10,
      backgroundColor: theme.palette.common.white,
    },
  },
  dialogTitle: {
    color: theme.palette.common.black,
    "& .MuiTypography-root": {
      fontWeight: 500,
    },
  },

  closeIcon: {
    color: theme.palette.common.black,
  },
};
