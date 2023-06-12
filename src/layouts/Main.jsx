import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-12">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;