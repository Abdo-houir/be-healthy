// RHFUpload.tsx
import FormHelperText from '@mui/material/FormHelperText';
import React, { useEffect, useRef } from 'react';
import {
  Controller,
  FieldPathValue,
  FieldValues,
  Path,
  useFormContext,
} from 'react-hook-form';
import Upload from '../Upload';

export interface RHFUploadProps<T extends FieldValues> {
  name: Path<T>;
  multiple?: boolean;
  helperText?: React.ReactNode;
  // any other Upload props (accept, maxSize, sx, etc.)
  [key: string]: any;
}

function RHFUpload<T extends FieldValues>({
  name,
  multiple = false,
  helperText,
  ...otherProps
}: RHFUploadProps<T>) {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext<T>();

  const inputRef = useRef<HTMLDivElement>(null);

  // scroll into view on validation error
  useEffect(() => {
    if (errors[name]) {
      inputRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [errors, name]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        // default drop logic for single vs multiple
        const handleDrop = (acceptedFiles: File[]) => {
          if (multiple) {
            const withPreview = acceptedFiles.map((file) =>
              Object.assign(file, { preview: URL.createObjectURL(file) })
            );
            setValue(name, withPreview as any, { shouldValidate: true });
          } else {
            const file = acceptedFiles[0];
            if (file) {
              const previewed = Object.assign(file, {
                preview: URL.createObjectURL(file),
              });
              setValue(name, previewed as any, { shouldValidate: true });
            }
          }
        };

        // default delete logic
        
        const handleDelete = () => {
          // Build your new value…
          const newValue = multiple ? [] : null;
          
          // Cast it so TS knows it matches the type of `T[name]`
          setValue(
            name,
            newValue as unknown as FieldPathValue<T, typeof name>,
            { shouldValidate: true }
          );
        };

        return (
          <Upload
            ref={inputRef}
            multiple={multiple}
            file={!multiple ? field.value : undefined}
            files={multiple ? field.value : undefined}
            onDrop={otherProps.onDrop ?? handleDrop}
            onDelete={otherProps.onDelete ?? handleDelete}
            onRemove={otherProps.onRemove ?? ((f: File) => {
              // remove single file in array
              const current = Array.isArray(field.value)
                ? field.value.filter((x:File) => x !== f)
                : [];
              setValue(name, current as any, { shouldValidate: true });
            })}
            onRemoveAll={otherProps.onRemoveAll ?? handleDelete}
            error={Boolean(error)}
            helperText={
              (error || helperText) && (
                <FormHelperText error={Boolean(error)} sx={{ px: 2 }}>
                  {error?.message ?? helperText}
                </FormHelperText>
              )
            }
            {...otherProps}
          />
        );
      }}
    />
  );
}

export default RHFUpload;
