export default function DashboardTemplate({sideBar, mainBarHead, mainBarBody}: any) {
    return <div id="dashboard-template">
        <div className="side-bar">{sideBar}</div>
        <div className="main-bar">
            <div className="head">{mainBarHead}</div>
            <div className="body">{mainBarBody}</div>
        </div>
    </div>
}
