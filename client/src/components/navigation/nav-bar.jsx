import { Link } from "@mui/material";
import "./nav-bar.css";
import AppleIcon from "@mui/icons-material/Apple";

function NavBar() {
    return (
        <div id="main-nav-bar">
            <Link
                id="nav-logo"
                color="primary"
                href={"/"}
                style={{
                    "&:hover": {
                        color: "primary !important",
                    },
                }}
            >
                <AppleIcon /> RBI
            </Link>
            <Link href={"/analytics"} className="nav-link">
                About
            </Link>
        </div>
    );
}

export default NavBar;
