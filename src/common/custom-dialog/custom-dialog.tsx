import CloseIcon from "@mui/icons-material/Close";
import { Divider, Grid, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import { customDialogStyles } from "./widgets/custom-dialog-styles";

interface CustomDialogProps {
  title: React.ReactNode;
  buttonName: string[];
  open: boolean;
  onClose: () => void;
  width?: string | number;
  height?: string | number;
  sx?: object;
  overFlow?: string;
  padding?: string;
}

const CustomDialog = (props: React.PropsWithChildren<CustomDialogProps>) => {
  const {
    onClose,
    open,
    title,
    width,
    height,
    sx = {},
    overFlow,
    padding,
  } = props;
  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
      sx={{ paper: customDialogStyles.dialog, ...sx }}
      PaperProps={{
        sx: {
          width: width || "auto",
          height: height || "auto",
          maxWidth: width || "auto",
        },
      }}
    >
      <DialogTitle
        id="customized-dialog-title"
        sx={{ ...customDialogStyles.dialogTitle, padding: "5px 20px" }}
      >
        <Grid
          container
          p={0}
          justifyContent={"space-between"}
          alignContent={"center"}
        >
          <Grid>
            <Typography>{title}</Typography>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={customDialogStyles.closeIcon}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Divider orientation="horizontal" sx={{ m: "10px 0px" }} />
      </DialogTitle>
      <DialogContent sx={{ overflow: overFlow, padding: padding }}>
        <Grid item flex={1}>
          {props.children}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
