import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "./common/dialogTitle/DialogTitle";
import DialogContent from "./common/DialogContent";
import { Divider, Grid, Typography, Box, withStyles } from "@material-ui/core";
import { ISettingsModalProps } from "../../types";
import styles from "./settingsModal.styles";
import RadioButtonInputField from "./form/fields/RadioButtonInputField";
import InputField from "./form/fields/InputField";
import { Form, Formik } from "formik";
import { useSettingsContext } from "../../context/SettingsContext";

const SettingsModal: React.FC<ISettingsModalProps> = ({
  classes,
  title,
  isOpen,
  setIsOpen,
}) => {
  const {
    settingsContext: themeContext,
    updateSettingsContext: updateThemeContext,
  } = useSettingsContext();

  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Dialog onClose={handleClose} open={isOpen}>
        <DialogTitle id="settings-modal" onClose={handleClose}>
          {title}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Time (minutes)
          </Typography>
          <Formik
            initialValues={
              themeContext || {
                pomodoro: 25,
                short_break: 5,
                long_break: 15,
                color: "#ff4d6e",
              }
            }
            onSubmit={(values, helpers) => {
              if (updateThemeContext) {
                updateThemeContext({
                  type: "UPDATE_THEME_STATE",
                  payload: values,
                });
                handleClose();
              }
            }}
          >
            {({ errors }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputField
                      name="pomodoro"
                      label="pomodoro"
                      type="number"
                      min="5"
                      max="60"
                      step="1"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item xs={12}>
                      <InputField
                        name="short_break"
                        label="short break"
                        type="number"
                        min="5"
                        max="60"
                        step="1"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item xs={12}>
                      <InputField
                        name="long_break"
                        label="long break"
                        type="number"
                        min="15"
                        max="60"
                        step="1"
                      />
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Box mt={1} mb={1}>
                      <Divider variant="middle" />
                    </Box>
                  </Grid>

                  <Grid container item xs={12} justify="center">
                    <RadioButtonInputField />
                  </Grid>

                  <Grid container item xs={12} justify="center">
                    <Button
                      autoFocus
                      className={classes.button}
                      type="submit"
                      disabled={Object.keys(errors).length > 0}
                    >
                      Apply
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(SettingsModal);
