import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="bg-gray-100">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;
