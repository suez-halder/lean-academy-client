import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import placeholderImg from '../../../assets/placeholder.jpg'
import Logo from "../../../components/Logo/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import {BsSunFill, BsMoonStarsFill} from 'react-icons/bs'
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
    const { user, logOut } = useAuth()
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    useEffect(()=>{
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute("data-theme", localTheme);
    },[theme])

    const handleToggle = (e) =>{
        if(e.target.checked){
            setTheme('dark')
        } else{
            setTheme('light')
        }
    }


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
                <Logo to='/'></Logo>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base md:text-xl ">
                    {navOptions}
                </ul>
            </div>
           
            <div className="navbar-end">
            <div className=" text-2xl flex justify-center items-center mr-2">
                <label className="swap swap-rotate w-full text-gray-300">

                    {/* this hidden checkbox controls the state */}
                    <input 
                    onChange={handleToggle} 
                    type="checkbox"
                    checked={theme === 'light'? false : true}
                     />

                    {/* sun icon */}
                    <BsSunFill className="swap-on"></BsSunFill>

                    {/* moon icon */}
                    <BsMoonStarsFill className="swap-off"></BsMoonStarsFill>

                </label>
            </div>
                {
                    user ?
                        <>
                            <img
                                className='rounded-full mr-2 object-fit'
                                referrerPolicy='no-referrer'
                                src={user && user.photoURL ? user.photoURL : placeholderImg}
                                alt="profile"
                                height='40'
                                width='40'


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