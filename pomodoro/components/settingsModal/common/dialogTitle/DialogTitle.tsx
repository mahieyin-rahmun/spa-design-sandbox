import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import styles from "./dialogTitle.styles";
import { IDialogTitleProps } from "../../../../types";

const DialogTitle = withStyles(styles, { index: 1 })(
  (props: IDialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle
        disableTypography
        className={classes.dialogTitle}
        {...other}
      >
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  },
);

export default DialogTitle;
