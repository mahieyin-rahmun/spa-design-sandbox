import {
  FormControl,
  FormLabel,
  Grid,
  OutlinedInput,
  OutlinedInputProps,
} from "@material-ui/core";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type TInputFieldProps = {
  name: string;
  label: string;
} & OutlinedInputProps &
  InputHTMLAttributes<HTMLInputElement>;

const InputField: React.FC<TInputFieldProps> = ({
  children,
  color: _,
  ...props
}) => {
  const [field, { error }] = useField({
    name: props.name,
    type: props.type,
    validate: (value) => {
      let message: string | undefined = undefined;

      if (props.type === "number" && (props.min || props.max)) {
        if (parseFloat(value) > parseFloat(props.max as string)) {
          message = `The value of ${props.label} cannot be more than ${props.max}`;
        }

        if (parseFloat(value) < parseFloat(props.min as string)) {
          message = `The value of ${props.label} cannot be less than ${props.min}`;
        }
      }
      return message;
    },
  });

  return (
    <FormControl error={Boolean(error)} style={{ width: "100%" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4} md={12}>
          <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
        </Grid>
        <Grid item xs={8} md={12}>
          <OutlinedInput
            fullWidth
            notched={false}
            id={props.name}
            {...field}
            {...props}
            inputProps={{
              min: props.min,
              max: props.max,
              step: props.step,
            }}
          />
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default InputField;
