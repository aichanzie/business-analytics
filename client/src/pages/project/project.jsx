import { useEffect } from "react";
import SubNavbar from "../../components/sub-navigation/sub-nav-bar";
import VerticalNavPanel from "../../components/vertical-nav/vertical-nav";
import "./project.css";
import * as d3 from "d3";

function ProjectPage() {
    const url = "/data/MOCK_DATA.json";

    useEffect(() => {
        d3.json(url)
            .then(function (responseData) {
                // console.log(responseData);
            })
            .catch(function (error) {
                console.error("Error:", error);
            });
    }, []);
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
