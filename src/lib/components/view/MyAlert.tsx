import Alert, { AlertColor, AlertProps } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { SxProps, Theme } from '@mui/system';
import { ReactNode } from 'react';

interface MyAlertProps {
    variant?: AlertProps['variant'];
    severity?: AlertColor;
    elevation?: number;
    message: ReactNode;
    color?: AlertColor;
    noTitle?: boolean;
    title?: string;
    icon?: ReactNode;
    action?: ReactNode;
    sx?: SxProps<Theme>;
}

const MyAlert = ({
    variant = "outlined",
    severity = 'info',
    elevation,
    message,
    color,
    noTitle,
    title,
    icon,
    action,
    sx,
}: MyAlertProps) => {

    return (
        <Alert
            variant={variant}
            severity={severity}
            elevation={elevation}
            color={color}
            icon={icon}
            action={action}
            sx={sx}
        >
            {
                !noTitle &&
                <AlertTitle>
                    {title ?? severity}
                </AlertTitle>
            }
            {message}
        </Alert>
    );
};

export default MyAlert;
