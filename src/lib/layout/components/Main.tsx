import { Box, SxProps, Theme } from '@mui/material'
import { ReactNode } from 'react'
import { HEADER } from '../config-header'

type Props = {
    children: ReactNode,
    sx: SxProps<Theme>
}

const Main = ({ children,sx }: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                pt: { xs: `${HEADER.MOBILE}PX`, md: `${HEADER.DESKTOP}PX` },
                overflow: "scroll",
                ...sx,
            }}
        >
            {children}
        </Box>
    )
}

export default Main