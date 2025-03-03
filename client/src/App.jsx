import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "./theme";
import "./App.css";
import NavBar from "./components/navigation/nav-bar";

function App() {
    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <NavBar></NavBar>
                <div className="main-page">
                    <h1>Hello world!</h1>
                </div>
                <CssBaseline />
            </ThemeProvider>
        </>
    );
}

export default App;
