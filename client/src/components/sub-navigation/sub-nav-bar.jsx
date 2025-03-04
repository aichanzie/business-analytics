import { Link } from "@mui/material";
import "./sub-nav-bar.css";
function SubNavbar() {
    return (
        <div id="sub-nav-bar" className="divider">
            <Link id="section-title">Team Name</Link>
            <Link className="sub-nav-link">Dashboard</Link>
            <Link className="sub-nav-link">Queries</Link>
        </div>
    );
}

export default SubNavbar;
