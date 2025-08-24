import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";


function Layout() {
    return (
        <div className="bg-fuchsia-100 flex flex-col min-h-screen">
            <NavBar />
            <main className={'container mx-auto py-6 grow'}>
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;