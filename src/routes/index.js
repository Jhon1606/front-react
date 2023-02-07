import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import Error404 from "../pages/Error404";
import Login from "../pages/Login";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
    {
        path: '',
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
]);
