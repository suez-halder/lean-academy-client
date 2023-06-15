import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const DashboardLayout = () => {
    const { user, setLoading, logOut } = useAuth()
    const [role, setRole] = useState({ isStudent: false, isInstructor: false, isAdmin: false });
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        // setLoading(true)
        const fetchUserRole = async () => {
            try {
                // setLoading(true)
                // console.log(`${import.meta.env.VITE_API_URL}/users/role/${user?.email}`);
                const response = await axiosSecure(`${import.meta.env.VITE_API_URL}/users/role/${user?.email}`);
                setRole(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user role:", error);
                setLoading(false);
            }
        };

        fetchUserRole();
    }, [setLoading, user?.email, axiosSecure]);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }




    return (
        <div className="drawer lg:drawer-open max-w-screen-2xl mx-auto'">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-green-400 ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu gap-2 p-6 w-60 h-full">
                    {/* Sidebar content here */}
                    {
                        role?.isStudent &&
                        <>
                            <li><NavLink to='selected-classes'>Selected Classes</NavLink></li>
                            <li><NavLink to='enrolled-classes'>Enrolled Classes</NavLink></li>
                            <li><NavLink to='payment-history'>Payment History</NavLink></li>
                        </>
                    }
                    {
                        role?.isInstructor &&
                        <>
                            <li><NavLink to='add-class'>Add a Class</NavLink></li>
                            <li><NavLink to='all-classes'>All Classes</NavLink></li>
                        </>
                    }
                    {
                        role?.isAdmin &&
                        <>
                            <li><NavLink to='manage-classes'>Manage Classes</NavLink></li>
                            <li><NavLink to='manage-users'>Manage Users</NavLink></li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/' onClick={handleLogOut}>Log Out</NavLink></li>
                   
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;