import { useEffect } from "react";
import SubNavbar from "../../components/sub-navigation/sub-nav-bar";
import VerticalNavPanel from "../../components/vertical-nav/vertical-nav";
import Dashboard from "../../components/dashboard/dashboard";
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
            <Dashboard />
        </div>
    );
}

export default ProjectPage;
