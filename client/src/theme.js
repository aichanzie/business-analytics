import { createTheme } from "@mui/material";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/inter";

const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1c1c1e",
        },
        secondary: {
            main: "#8e8e93",
        },
        background: {
            default: "#f2f2f7",
            paper: "#f2f2f7",
        },
        warning: {
            main: "#ff9500",
        },
        text: {
            primary: "#1c1c1e",
            secondary: "#8e8e93",
        },
    },
    typography: { fontFamily: "'Inter', sans-serif" },
});

export { lightTheme };
