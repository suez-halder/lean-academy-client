import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Logo from "./Logo";
import placeholderImg from '../../../assets/placeholder.jpg'

const Navbar = () => {
    const { user, logOut } = useAuth()


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to="instructors">Instructors</NavLink></li>
            <li><NavLink to='classes'>Classes</NavLink></li>
            {
                user && <li><NavLink to='dashboard'>Dashboard</NavLink></li>
            }
        </>




    return (
        <div className="navbar bg-green-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Logo></Logo>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <img
                                className='rounded-full mr-2'
                                referrerPolicy='no-referrer'
                                src={user && user.photoURL ? user.photoURL : placeholderImg}
                                alt="profile"
                                height='25'
                                width='25'
                                
                            />
                            <button onClick={handleLogOut}>Log Out</button>
                        </>
                        :
                        <>
                            <button><Link to='/login'>Login</Link></button>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;