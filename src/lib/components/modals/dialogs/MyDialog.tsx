"use client"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { UseBoolean } from '@/lib/hooks/use-boolean';
import { useResponsive } from '@/lib/hooks/use-responsive';
import { Breakpoint } from '@mui/material';
import { FormEventHandler, ReactNode } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

type Props<T extends FieldValues> = {
    open: UseBoolean
    title?: string | ReactNode
    dividers?: boolean
    form?: boolean
    actions?: ReactNode
    methods?: UseFormReturn<T>,
    onSubmit?: FormEventHandler<HTMLFormElement>,
    maxWidth?: Breakpoint
    responsive?: boolean
    children: ReactNode
}
const MyDialog = <T extends FieldValues>({
    open,
    title,
    dividers,
    actions,
    form,
    onSubmit,
    methods,
    maxWidth,
    responsive,
    children
}: Props<T>) => {
    const smUp = useResponsive('up', 'sm');

    return (
        <Dialog
            open={open.value}
            fullWidth={smUp}
            fullScreen={!smUp && responsive}
            maxWidth={false}
            PaperProps={{
                sx: {
                    maxWidth: maxWidth
                }
            }}
            onClose={open.onFalse}
            component='section'
            sx={{
                "&  .MuiDialog-paper": {
                    borderRadius: smUp ? 5 : '0px',
                    mx: 0,
                    py: 2,
                    px: 1,
                }
            }}
        >
            {
                title &&
                <DialogTitle>
                    {title}
                </DialogTitle>
            }
            {/* {
                form
                    ? (
                        <MyFormProvider onSubmit={onSubmit} methods={methods} >
                            <DialogContent dividers={dividers}>
                                {children}
                            </DialogContent>
                            <DialogActions>
                                {actions}
                            </DialogActions>
                        </MyFormProvider>
                    )
                    : (
                        <>
                            <DialogContent dividers={dividers}>
                                {children}
                            </DialogContent>
                            <DialogActions>
                                {actions}
                            </DialogActions>
                        </>
                    )
            } */}
            <DialogContent dividers={dividers}>
                {children}
            </DialogContent>
            <DialogActions>
                {actions}
            </DialogActions>
        </Dialog>
    )
}

export default MyDialog