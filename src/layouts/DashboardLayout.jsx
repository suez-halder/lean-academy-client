import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const DashboardLayout = () => {
    const { user, setLoading } = useAuth()
    const [role, setRole] = useState({ isStudent: false, isInstructor: false, isAdmin: false });
    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                // setLoading(true)
                console.log(`${import.meta.env.VITE_API_URL}/users/${user?.email}`);
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${user?.email}`);
                setRole(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user role:", error);
                setLoading(false);
            }
        };

        fetchUserRole();
    }, []);




    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-green-300 text-base-content">
                    {/* Sidebar content here */}
                    {
                        role.isStudent &&
                        <>
                            <li><Link to='selected-classes'>Selected Classes</Link></li>
                            <li><Link to='enrolled-classes'>Enrolled Classes</Link></li>
                            <li><Link to='payment-history'>Payment History</Link></li>
                        </>
                    }
                    {
                        role.isInstructor &&
                        <>
                            <li><Link to='add-class'>Add a Class</Link></li>
                            <li><Link to='all-classes'>All Classes</Link></li>
                        </>
                    }
                    {
                        role.isAdmin &&
                        <>
                            <li><Link to='manage-classes'>Manage Classes</Link></li>
                            <li><Link to='manage-users'>Manager Users</Link></li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><Link to='/'>Home</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;