import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import Error404 from "../pages/Error404";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Index from "../pages/cursos";
import { index } from "../api/cursos";
import Create from "../pages/cursos/create";
import IndexTeachers from "../pages/profesores";

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
                loader: index,
            },
            {
                path: '/cursos/crear',
                element: <Create/>,
                loader: index,
            },
            {
                path: '/cursos/editar/:id',
                element: <Create/>,
                loader: index,
            },
            {
                path: '/profesores',
                element: <IndexTeachers/>,
                // loader: IndexTeachers
            },
            {
                path: '/profesores/crear',
                element: <Create/>,
                loader: index,
            },
            {
                path: '/profesores/editar/:id',
                element: <Create/>,
                loader: index,
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
