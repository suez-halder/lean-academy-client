import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    const isStudent = false;
    const isInstructor = false;
    const isAdmin = true;



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
                        isStudent &&
                        <>
                            <li><Link>Selected Classes</Link></li>
                            <li><Link>Enrolled Classes</Link></li>
                            <li><Link>Payment History</Link></li>
                        </>
                    }
                    {
                        isInstructor &&
                        <>
                            <li><Link>Add a Class</Link></li>
                            <li><Link>All Classes</Link></li>
                        </>
                    }
                    {
                        isAdmin &&
                        <>
                            <li><Link>Manage Class</Link></li>
                            <li><Link>Manager Users</Link></li>
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