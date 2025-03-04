import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "./theme";
import "./App.css";
import NavBar from "./components/navigation/nav-bar";
import SiteRouter from "./components/routing/site-router";

function App() {
    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <NavBar></NavBar>
                <SiteRouter />
                <CssBaseline />
            </ThemeProvider>
        </>
    );
}

export default App;
