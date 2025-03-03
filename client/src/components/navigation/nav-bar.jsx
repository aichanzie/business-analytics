import { Link } from "@mui/material";
import "./nav-bar.css";
import AppleIcon from "@mui/icons-material/Apple";
import { color } from "d3";
function NavBar() {
    return (
        <div id="main-nav-bar">
            <Link
                id="nav-logo"
                color="primary"
                style={{
                    "&:hover": {
                        color: "primary !important",
                    },
                }}
            >
                <AppleIcon /> RBI
            </Link>
            <Link className="nav-link">About</Link>
        </div>
    );
}

export default NavBar;
