import { createTheme } from "@mui/material";
import { green, indigo } from "@mui/material/colors";
import { typography } from "./Typoghroy";
import { grey } from "./lightTheme";
import { shadows } from "./shadows";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        text: {
            primary: "#FFFFFF",
            secondary: grey[500],
            disabled: grey[600],
        },
        primary: {
            light: green[200],
            main: green[500],
            dark: green[700],
            contrastText: "#fed"
        },
        secondary: {
            light: indigo[200],
            main: indigo[500],
            dark: indigo[700],
            contrastText: "#fed"
        },
        background: {
            paper: grey[800],
            default: grey[900],
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                sx: {
                    textWrap: "nowrap"
                },
                variant: "contained"
            }
        },
        MuiTooltip: {
            defaultProps: {
                arrow: true
            }
        }
    },
    typography: typography,
    shadows: shadows("dark"),
});

export default darkTheme;