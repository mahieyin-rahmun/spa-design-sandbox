import { withStyles, Theme } from "@material-ui/core";
import MuiDialogContent from "@material-ui/core/DialogContent";

const DialogContent = withStyles(
  (theme: Theme) => ({
    root: {
      padding: theme.spacing(4),
    },
  }),
  { index: 1 },
)(MuiDialogContent);

export default DialogContent;
