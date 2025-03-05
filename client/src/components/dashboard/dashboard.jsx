import VerticalNavPanel from "../vertical-nav/vertical-nav";
import "./dashboard.css";
function Dashboard() {
    return (
        <div id="section">
            <VerticalNavPanel />
            <div id="section-content" className="bg-system-gray-6">
                Analytics Content! in dashboard
            </div>
        </div>
    );
}

export default Dashboard;
