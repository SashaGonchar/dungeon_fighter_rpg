import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
    return (
        <div className="w-full h-screen bg-fuchsia-100">
            <NavBar />
            <Outlet />
        </div>
    );
}

export default Layout;