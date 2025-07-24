import { useEffect, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import MyTextField from '../MyTextField';

type RHFTextFieldProps = {
  name: string;
  helperText?: string;
  type?: string;
  icon?: React.ReactNode;
  end?: boolean;
  start?: boolean;
  nullable?: boolean;
  isZero?: boolean;
  [key: string]: any; // for spreading other props
};

const RHFTextField = ({
  name,
  helperText,
  type = 'text',
  icon,
  end,
  start,
  nullable,
  isZero = false,
  ...other
}: RHFTextFieldProps) => {
  const { control, formState: { errors } } = useFormContext();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (errors[name]) {
      inputRef.current?.focus();
    }
  }, [errors, name]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        useEffect(() => {
          if (nullable) {
            if (field.value === 0 || field.value === "") {
              field.onChange(null);
            }
          }
        }, [nullable, field.value]);

        const value =
          type === "number" && field.value === 0
            ? isZero ? 0 : ""
            : field.value ?? "";

        return (
          <MyTextField
            ref={inputRef}
            icon={icon}
            end={end}
            start={start}
            type={type}
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (type === "number") {
                field.onChange(Number(event.target.value));
              } else {
                field.onChange(event.target.value);
              }
            }}
            error={!!error}
            helperText={error ? error.message : helperText}
            {...other}
          />
        );
      }}
    />
  );
};

export default RHFTextField;
