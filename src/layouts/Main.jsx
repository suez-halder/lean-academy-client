import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-60px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;