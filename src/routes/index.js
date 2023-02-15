import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import Error404 from "../pages/Error404";
import Login from "../pages/Login";
import IndexTeachers from "../pages/profesores";
import Home from "../pages/Home";

//Courses pages
import Edit from "../pages/cursos/edit";
import Index from "../pages/cursos";
import Create from "../pages/cursos/create";
import EditTeacher from "../pages/profesores/edit";

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
            },
            {
                path: '/cursos/crear',
                element: <Create/>,
            },
            {
                path: '/cursos/editar/:id',
                element: <Edit />,
            },
            {
                path: '/profesores',
                element: <IndexTeachers/>,
            },
            {
                path: '/profesores/crear',
                element: <Create/>,
            },
            {
                path: '/profesores/editar/:id',
                element: <EditTeacher/>,
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
