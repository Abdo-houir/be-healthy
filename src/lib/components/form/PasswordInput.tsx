'use client';

import useBoolean from '@/lib/hooks/use-boolean';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { forwardRef } from 'react';
import MyTextField from './MyTextField'; // adjust the path if needed

type PasswordInputProps = {
    label?: string;
    name?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ label = 'Password', name = 'password', value, onChange }, ref) => {
        const showPassword = useBoolean({ initialState: false });

        return (
            <MyTextField
                fullWidth
                ref={ref}
                type={showPassword.value ? 'text' : 'password'}
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                end
                icon={
                    <IconButton onClick={showPassword.onToggle} edge="end">
                        {showPassword.value ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                }
            />
        );
    }
);

export default PasswordInput;
