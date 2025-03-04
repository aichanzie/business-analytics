import SubNavbar from "../../components/sub-navigation/sub-nav-bar";
import VerticalNavPanel from "../../components/vertical-nav/vertical-nav";
import "./project.css";

function ProjectPage() {
    return (
        <div className="container">
            <SubNavbar />
            <div id="section">
                <VerticalNavPanel />
                <div id="section-content" className="bg-system-gray-6">
                    Analytics Content!
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
