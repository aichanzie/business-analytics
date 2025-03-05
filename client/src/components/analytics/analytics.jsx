import "./analytics.css";
function AnalyticsSection() {
    return (
        <>
            <div className="row" style={{ height: "50vh" }}>
                <div className="row-item">
                    <div className="row">
                        <p className="row-item">Sales Performance Metrics</p>
                        <p className="row-item">Promotion & Discount</p>
                    </div>
                    <div>
                        <h4>Sales by Region</h4>
                    </div>
                </div>
                <div className="row-item">
                    <h4>Sales by Product</h4>
                </div>
            </div>
            <div className="row" style={{ height: "50vh" }}>
                Row 2
            </div>
            <div className="row" style={{ height: "50vh" }}>
                Row 3
            </div>
            <div className="row" style={{ height: "50vh" }}>
                Row 4
            </div>
        </>
    );
}

export default AnalyticsSection;
