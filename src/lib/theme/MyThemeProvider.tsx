"use client"
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ReactNode } from 'react'
import useSettingsContext from '../context/settings/useSettingsContext '
import darkTheme from './darkTheme'
import lightTheme from './lightTheme'

// const ColorModeContext = createContext({ toggleColorMode: () => { } });
type Props = {
    children: ReactNode
}

export default function MyThemeProvider({ children }: Props) {
    const {theme} = useSettingsContext()
    return (
        <>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <CssBaseline />
                    {children}
            </ThemeProvider>
        </>
    )
}