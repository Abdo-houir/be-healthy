"use client"
import { Breakpoint, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useResponsive = (query: MediaQuery, start: number | Breakpoint, end?: number | Breakpoint) => {
    const theme = useTheme();

    const mediaUp = useMediaQuery(theme.breakpoints.up(start));

    const mediaDown = useMediaQuery(theme.breakpoints.down(start));

    const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end || start));

    const mediaOnly = useMediaQuery(theme.breakpoints.only("sm"));

    switch (query) {
        case "up":
            return mediaUp;
        case "down":
            return mediaDown;
        case "between":
            return mediaBetween;
        default:
            return mediaOnly;
    }

}