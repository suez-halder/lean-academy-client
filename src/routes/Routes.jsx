import {
    createBrowserRouter,
} from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import AllClasses from "../pages/Dashboard/Instructor/AllClasses";
import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses";
import SelectedClasses from "../pages/Dashboard/Student/SelectedClasses";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'selected-classes',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: 'enrolled-classes',
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path: 'add-class',
                element: <AddClass></AddClass>
            },
            {
                path: 'all-classes',
                element: <AllClasses></AllClasses>
            },
            {
                path: 'manage-classes',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'manage-users',
                element: <ManageUsers></ManageUsers>
            }
        ]
    }

]);