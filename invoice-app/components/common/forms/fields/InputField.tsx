import {
  FormControl,
  FormHelperText,
  FormLabel,
  OutlinedInput,
} from "@material-ui/core";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type TInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  variant?: "small" | "medium" | "large";
};

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
  props.variant = props.variant || "medium";

  return (
    <FormControl
      error={Boolean(error)}
      style={{
        width: "100%",
      }}
    >
      {Boolean(props.label) && (
        <FormLabel htmlFor={field.name} style={{ marginBottom: "1em" }}>
          {props.label}
        </FormLabel>
      )}
      <OutlinedInput
        {...props}
        {...field}
        id={field.name}
        notched={false}
        inputProps={{
          min: props.min,
          max: props.max,
          step: props.step,
        }}
      />
      <FormHelperText error={Boolean(error)}>{error}</FormHelperText>
    </FormControl>
  );
};

export default InputField;
