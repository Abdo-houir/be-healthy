import ThemeSwitcher from "@/lib/components/actions/ThemeSwitcher"
import { AppBar, Stack } from "@mui/material"
import { ReactNode } from "react"
import { DRAWER } from "../../layout/config-header"
import ClientToolBar from "./ClientToolBar"

type Props = {
    children: ReactNode,
    actions: ReactNode,
}

const Header = ({ actions, children }: Props) => {
    return (
        <AppBar
            elevation={0}
            sx={{
                bgcolor: 'transparent',
                width: {
                    xs: '100vw',
                    lg: `calc(100vw - ${DRAWER.VERTICAL}px)`,
                },
            }}
        >
            <ClientToolBar>
                {actions}
                <Stack direction='row' sx={{ justifyContent: "flex-end", alignItems: 'center', width: "100%" }}>
                    <ThemeSwitcher />
                </Stack>
            </ClientToolBar>
            {children}
        </AppBar>
    )
}

export default Header