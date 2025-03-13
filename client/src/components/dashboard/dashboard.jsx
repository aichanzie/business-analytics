import AnalyticsSection from "../analytics/analytics";
import VerticalNavPanel from "../vertical-nav/vertical-nav";
import "./dashboard.css";
function Dashboard() {
    return (
        <div id="section">
            <VerticalNavPanel />
            <div id="section-content" className="bg-system-gray-6">
                <AnalyticsSection />
            </div>
        </div>
    );
}

export default Dashboard;
