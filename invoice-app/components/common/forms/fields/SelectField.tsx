import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type TSelectFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  selectOptions: {
    label: string;
    value: string | number;
  }[];
  variant?: "small" | "medium" | "large";
} & InputHTMLAttributes<HTMLSelectElement>;

const SelectField: React.FC<TSelectFieldProps> = ({
  children,
  color: _,
  ...props
}) => {
  const [field, { error }] = useField(props);
  props.variant = props.variant || "medium";

  return (
    <FormControl
      error={Boolean(error)}
      style={{
        width: "100%",
      }}
    >
      <FormLabel htmlFor={field.name} style={{ marginBottom: "1em" }}>
        {props.label}
      </FormLabel>
      <Select {...field} id={field.name} displayEmpty variant="outlined">
        <MenuItem value="" disabled>
          {props.placeholder || "Select an option..."}
        </MenuItem>

        {props.selectOptions.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error={Boolean(error)}>{error}</FormHelperText>
    </FormControl>
  );
};

export default SelectField;
