import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import Error404 from "../pages/Error404";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Index from "../pages/cursos";
import { index } from "../api/cursos";

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
                element: <Index/>,
                loader: index
            },
            {
                path: '/profesores',
                element: <Index/>
            },
            {
                path: '/asignaciones',
                element: <Index/>
            },
        ],
    },
    {
        path: '/login',
        element: <Login/>
    }
]);
