import { withStyles, Theme } from "@material-ui/core";
import MuiDialogActions from "@material-ui/core/DialogActions";

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    position: "relative",
    padding: theme.spacing(2),
  },
}))(MuiDialogActions);

export default DialogActions;
