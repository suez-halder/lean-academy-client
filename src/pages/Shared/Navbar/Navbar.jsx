import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import placeholderImg from '../../../assets/placeholder.jpg'
import Logo from "../../../components/Logo/Logo";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const { user, logOut } = useAuth()


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions =
        <>
            <li ><NavLink to='/'>Home</NavLink></li>
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
                        <RxHamburgerMenu></RxHamburgerMenu>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-green-300 rounded-box w-36 z-50">
                        {navOptions}
                    </ul>
                </div>
                <Link to='/'><Logo></Logo></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul  className="menu menu-horizontal px-1 text-base md:text-xl ">
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
                                height='50'
                                width='50'
                                
                            />
                            <button className="btn btn-accent px-4 md:px-8" onClick={handleLogOut}>Log Out</button>
                        </>
                        :
                        <>
                            <button className="btn btn-accent px-4 md:px-8"><Link to='/login'>Login</Link></button>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;