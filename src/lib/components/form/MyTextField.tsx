import InputAdornment from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { forwardRef, ReactNode } from 'react';

type MyTextFieldProps = TextFieldProps & {
  icon?: ReactNode;
  start?: boolean;
  end?: boolean;
};

const MyTextField = forwardRef<HTMLInputElement, MyTextFieldProps>(
  ({ icon, start, end, ...others }, ref) => {
    const InputProps = {
      startAdornment: start && icon ? (
        <InputAdornment position="start">{icon}</InputAdornment>
      ) : undefined,
      endAdornment: end && icon ? (
        <InputAdornment position="end">{icon}</InputAdornment>
      ) : undefined,
    };

    return (
      <TextField
        {...others}
        inputRef={ref}
        InputProps={InputProps} // ✅ correct prop
      />
    );
  }
);

export default MyTextField;
