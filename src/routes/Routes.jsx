import {
    createBrowserRouter,
} from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import Classes from "../pages/Classes/Classes";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import DashboardOutlet from "../pages/Dashboard/DashboardOutlet";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import AllClasses from "../pages/Dashboard/Instructor/AllClasses";
import EditClass from "../pages/Dashboard/Instructor/EditClass";
import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory";
import SelectedClasses from "../pages/Dashboard/Student/SelectedClasses";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";
import StudentRoute from "./StudentRoute";

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
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            }

        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardOutlet></DashboardOutlet>
            },
            {
                path: 'selected-classes',
                element: <StudentRoute><SelectedClasses></SelectedClasses></StudentRoute>
            },
            {
                path: 'enrolled-classes',
                element: <StudentRoute><EnrolledClasses></EnrolledClasses></StudentRoute>
            },
            {
                path: 'payment-history',
                element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
            },
            
            {
                path: 'add-class',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'all-classes',
                element: <InstructorRoute><AllClasses></AllClasses></InstructorRoute>
            },
            {
                path:'all-classes/edit/:id',
                element: <InstructorRoute><EditClass></EditClass></InstructorRoute>
            },
            {
                path: 'manage-classes',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'manage-users',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    }

]);