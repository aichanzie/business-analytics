import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../../pages/langing/langing";
import ProjectPage from "../../pages/project/project";

function SiteRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/analytics" element={<ProjectPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default SiteRouter;
