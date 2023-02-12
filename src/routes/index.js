import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import Error404 from "../pages/Error404";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Cursos from "../pages/Cursos";

export const routes = createBrowserRouter([
    {
        path: '',
        element: <App/>,
        errorElement: <Error404/>,     
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/cursos',
                element: <Cursos/>
            }       
        ],
    },
    {
        path: '/login',
        element: <Login/>
    }
]);
