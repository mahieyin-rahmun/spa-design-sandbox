import {
  createStyles,
  Radio,
  Theme,
  makeStyles,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  RadioProps,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { useField } from "formik";
import React from "react";

const useStyles = (color: string) =>
  makeStyles(
    (theme: Theme) => {
      return createStyles({
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
        icon: {
          borderRadius: "50%",
          width: 40,
          height: 40,
          boxShadow:
            "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
          backgroundColor: color,
          backgroundImage:
            "linear-gradient(0deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
          "$root.Mui-focusVisible &": {
            outlineOffset: 2,
          },
          "input:hover ~ &": {
            filter: "brightness(1.2)",
          },
        },
        checkedIcon: {
          backgroundColor: color,
          color: theme.palette.text.primary,
          paddingTop: "5px",
          "&:before": {
            content: '"✔"',
          },
          "input:hover ~ &": {},
        },
      });
    },
    { index: 1 },
  )();

const StyledRadio: React.FC<RadioProps & { radioButtonFill: string }> = (
  props,
) => {
  const classes = useStyles(props.radioButtonFill);

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
};

function RadioButtonInputField() {
  const [field, { error }] = useField({
    name: "color",
  });

  return (
    <FormControl error={Boolean(error)}>
      <FormLabel htmlFor={field.name}>
        <Typography variant="h6" align="center" color="textSecondary">
          Color
        </Typography>
      </FormLabel>
      <RadioGroup row defaultValue="#ff4d6e" {...field}>
        <FormControlLabel
          value="#ff4d6e"
          control={<StyledRadio radioButtonFill="#ff4d6e" />}
          label=""
        />
        <FormControlLabel
          value="#2ef8f8"
          control={<StyledRadio radioButtonFill="#2ef8f8" />}
          label=""
        />
        <FormControlLabel
          value="#e74af9"
          control={<StyledRadio radioButtonFill="#e74af9" />}
          label=""
        />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonInputField;
