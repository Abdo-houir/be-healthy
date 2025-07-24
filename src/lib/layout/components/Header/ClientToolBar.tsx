"use client"
import { useOffsetTop } from '@/lib/hooks/use-off-set-top'
import { Toolbar, useTheme } from '@mui/material'
import { ReactNode } from 'react'
import { HEADER } from '../../config-header'

type Props = {
    children: ReactNode
}

const ClientToolBar = ({ children }: Props) => {
    const theme = useTheme();
    const offsetTop = useOffsetTop(HEADER.DESKTOP);

    return (
        <Toolbar
            sx={{
                height: {
                    xs: `${HEADER.MOBILE}px`,
                    md: `${HEADER.DESKTOP}px`,
                },
                transition: theme.transitions.create(['height'],
                    {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter
                    }
                ),
                ...(offsetTop && {
                    // ...bgBlur({
                    //     color: theme.palette.background.default,
                    // }),
                    height: {
                        md: HEADER.DESKTOP_OFFSET,
                    },
                    backgroundColor: theme.palette.background.paper
                }),
            }}

        >
            {children}
        </Toolbar>
    )
}

export default ClientToolBar