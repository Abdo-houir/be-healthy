import { createTheme } from "@mui/material";
import { green, indigo } from "@mui/material/colors";
import { typography } from "./Typoghroy";
import { shadows } from "./shadows";

export const grey = {
    0: "#FFFFFF",
    50: "#fdfdff",
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#212B36",
    900: "#161C24",
};
const lightTheme = createTheme({
    palette: {
        mode: "light",
        text: {
            primary: grey[800],
            secondary: grey[600],
            disabled: grey[500],
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
            paper: grey[300],
            default: grey[50],
        },
        divider: "#00ff00"
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
    shadows: shadows("light"),
    typography: typography
})

export default lightTheme;