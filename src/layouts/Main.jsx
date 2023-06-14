import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Navbar></Navbar>
            <div className="pt-12">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;