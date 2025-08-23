import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import Home from "../pages/Home.jsx";
import Character from "../pages/Character.jsx";
import Shop from "../pages/Shop.jsx";
import Fight from "../pages/Fight.jsx";
import Profile from "../pages/Profile.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { index: true, element: <Home /> },
            { path: "character", element: <Character /> },
            { path: "shop", element: <Shop /> },
            { path: "fight", element: <Fight /> },
            { path: "profile", element: <Profile /> },
            {
                path: "*",
                element: <h1>404: Please use only existing path, page not found</h1>,
            },
        ],
    },
]);

export default router;