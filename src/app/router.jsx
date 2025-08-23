import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Character from "./Character";
import Shop from "./Shop";
import Fight from "./Fight";
import Profile from "./Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/character", element: <Character /> },
            { path: "/shop", element: <Shop /> },
            { path: "/fight", element: <Fight /> },
            { path: "/profile", element: <Profile /> },
        ],
    },
]);

export default router;