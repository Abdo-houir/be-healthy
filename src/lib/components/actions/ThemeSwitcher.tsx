"use client";

import useSettingsContext from '@/lib/context/settings/useSettingsContext ';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { IconButton } from '@mui/material';

const ThemeSwitcher = () => {
    const { theme, onUpdate } = useSettingsContext();
    const handleToggleTheme = () => {
        const newTheme: ThemeMode = theme === "light" ? "dark" : "light";

        onUpdate("theme", newTheme)
    }
    return (
        <IconButton
            color={theme === "light" ? "warning" : "info"}
            onClick={handleToggleTheme}
        >
            {
                theme === "light"
                    ? <LightModeRoundedIcon />
                    : <DarkModeRoundedIcon />
            }
        </IconButton>
    )
}

export default ThemeSwitcher