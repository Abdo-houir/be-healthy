"use client"
import useBoolean from '@/lib/hooks/use-boolean';
import { DRAWER } from '@/lib/layout/config-header';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Drawer, DrawerProps, IconButton, IconButtonProps, Tooltip } from '@mui/material';
import { ReactNode } from 'react';


type Props = {
    btnProps?: IconButtonProps
    DrawerProps?: DrawerProps,
    children?: ReactNode,
    renderBtn?: boolean
}

const MyDrawer = ({ btnProps, DrawerProps, children, renderBtn = true }: Props) => {
    const open = useBoolean({ initialState: false });

    return (
        <>
            {
                renderBtn &&
                <Tooltip
                    title="open menu"
                    arrow
                >
                    <IconButton
                        onClick={open.onTrue}
                        {...btnProps}
                    >
                        <MenuRoundedIcon />
                    </IconButton>
                </Tooltip>
            }
            <Drawer
                open={open.value}
                onClose={open.onFalse}
                variant='permanent'
                sx={{
                    " & .MuiPaper-root": {
                        minWidth: `${DRAWER.VERTICAL}px`,
                    }
                }}
                {...DrawerProps}
            >
                {children}
            </Drawer>
        </>
    )
}

export default MyDrawer